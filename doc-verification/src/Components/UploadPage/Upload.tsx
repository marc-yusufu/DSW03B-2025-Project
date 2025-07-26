import { useState, useRef, createContext, useContext } from "react"
import NavBarHome from "../Common/NavBarHome";
import { CarIcon, CloudUpload, DoorClosedIcon } from "lucide-react"; 
import {jsPDF} from "jspdf";


export const fileContext = createContext("");

type uploadedFiles = {
    name: string;
    lastModified: number;
}

export default function Upload(){

    /*for openCV resizing and denoising*/
    const canvasInputRef = useRef<HTMLCanvasElement>(null);
    const canvasOutputRef = useRef<HTMLCanvasElement>(null);



    const [fileName, setFileName] = useState("");
    const [fileSizeInBytes, setFileSizeInBytes] = useState<number>(0)
    const fileSizeInMB = (fileSizeInBytes/(1024 * 1024)).toFixed(2)
    const [typeOfFile, setTypeOfFile] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [recentlyUploaded, setRecentlyUploaded] = useState<uploadedFiles[]>([]);
    const [uploading, setUploading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    var uploadDate : Date = new Date();
    const year = uploadDate.getFullYear();
    const month = String(uploadDate.getMonth() + 1).padStart(2, '0');
    const day = uploadDate.getDate();
    const formattedDate = `${year}/${month}/${day}`;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const fileInput = e.target.files?.[0];
        if (!fileInput) return;

        setFileName(fileInput.name);
        setFileSizeInBytes(fileInput.size);
        handleUploadLoading();

        const recentFiles = e.target.files ? Array.from(e.target.files).map(file => ({
            name: file.name,
            lastModified: file.lastModified,
        })) : [];
        setRecentlyUploaded(prev => [...prev, ...recentFiles]);
        

        /*openCV section*/
        const reader = new FileReader();

        reader.onload = (e) =>{
            const img = new Image();
            img.src = e.target?.result as string;

            img.onload = () =>{
                const canvas = canvasInputRef.current;
                if(!canvas) return;
                const ctxInput = canvas?.getContext("2d");

                canvas.width = img.width;
                canvas.height = img.height;
                ctxInput?.drawImage(img, 0, 0);

                if(window.cv && window.cv.imread){
                    processImage();
                }else{
                    window.cv['onRuntimeInitialized'] = processImage;
                }
            };
        };
        reader.readAsDataURL(fileInput);
    }
    

    const handleInputRef =()=>{ 
            inputRef.current?.click();
    };

    const handleUploadLoading = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            setResult("Upload Completed");
        }, 2000);
    };

    /*openCV image processing*/
    const processImage = () => {
        if (!canvasInputRef.current || !canvasOutputRef.current) return;

        const src = window.cv.imread(canvasInputRef.current);
        const resized = new cv.Mat();
        const gray = new cv.Mat();
        const denoised = new cv.Mat();
        const output = new cv.Mat();

        const size = new window.cv.Size(150, 150);

        // Resize
        window.cv.resize(src, resized, size, 0, 0, window.cv.INTER_AREA);

        // Convert to grayscale
        window.cv.cvtColor(resized, gray, window.cv.COLOR_RGBA2GRAY);

        // Denoise grayscale image
        window.cv.fastNlMeansDenoising(gray, denoised, 30, 7, 21);

        // Threshold the denoised image
        window.cv.threshold(denoised, denoised, 127, 255, window.cv.THRESH_BINARY);

        // Convert back to RGBA for displaying
        window.cv.cvtColor(denoised, output, window.cv.COLOR_GRAY2RGBA);

        // Show the processed image
        window.cv.imshow(canvasOutputRef.current!, output);
        console.log("Processing image....")
        // Wait for canvas to visually update, then generate PDF
        setTimeout(() => {
            generatePDF(canvasOutputRef.current!);
        }, 100);

        // Cleanup
        src.delete();
        resized.delete();
        gray.delete();
        denoised.delete();
        output.delete();
    };



    /*Passing image to a PDF*/
    const generatePDF = (canvas: HTMLCanvasElement) =>{
        const A4_width = 595;
        const A4_height = 842;
        const margin = 20;

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [A4_width, A4_height],
        });

        const aspectRatio = canvas.width / canvas.height;
        //allowed w and h within margin
        const maxWidth = A4_width - margin * 2;
        const maxHeight = A4_height - margin * 2;

        let imageWidth = maxWidth;
        let imageHeight = maxWidth / aspectRatio;

        if(imageHeight > maxHeight){
            imageHeight = maxHeight;
            imageWidth = maxHeight * aspectRatio;
        }

        //center image on pdf
        const x = (A4_width - imageWidth) / 2;
        const y = (A4_height - imageHeight) / 2;

        pdf.addImage(imgData, "PNG", x, y, imageWidth, imageHeight);
        pdf.save(fileName+".pdf");
    };
    
    return(
        <div>
            <div><NavBarHome/></div>
        <div className="flex justify-center flex-col items-center">
            <div className="w-[90%] flex flex-row justify-between mb-3">            
                <h1 className=" font-medium text-[20px]">Upload File</h1>
                <h1 className="pr-53 font-medium text-[20px]">Recently Uploaded</h1>
            </div>
            <div className=" flex justify-between flex-row w-[90%] h-[300px] mb-10">
                <div className="w-[66%] h-full flex">
                    <label htmlFor="fileUpload" className="border-dashed border-1 w-full rounded-lg items-center justify-center flex flex-col bg-[#e5efff99] hover:bg-[#e8edff]">
                        <CloudUpload className="mx-auto h-10 w-10 text-gray-500 mb-2" />
                        {fileName? (
                            <div className="flex w-full flex-col items-center">
                                <p className="text-[#4ce303] font-bold">{uploading? <span className="text-[#2a30f9]">Uplaoding file...</span>  : result}</p>
                                <p className="font-medium">{fileName} {fileSizeInMB}MB</p>
                            </div>) 
                        : (
                        <div className="flex justify-center flex-col w-full items-center">
                            <p className="p-5 text-[14px] text-gray-500">Max 120 MB (PNG, JPEG, PDF)</p>
                            <p className="p-2 text-[18px] font-medium">Drag and drop </p> 
                            <p className="mb-3">or</p>
                            <button onClick={handleInputRef} className="bg-[#3376F3] w-[152px] p-2 text-white hover:bg-blue-600 rounded-lg">Browse file</button>

                        </div>)}
                    </label>
                    <input type="file"
                    ref={inputRef}
                    hidden = {true}
                    id="fileUpload"
                    onChange = {handleFileChange}/>
                </div>

                    {/*Recent;y uploaded container*/}
                <div className="max-h-[300px] overflow-y-auto border-1 border-gray-200 rounded-lg w-[30%] bg-[#ffffff] p-5">
                    {recentlyUploaded.length > 0 ? (
                        <ul className="text-[14px] p-2">
                            {recentlyUploaded.map((file, index) => (
                                <li 
                                    key={index}
                                    className="p-4 mb-2 border-1 rounded-lg border-gray-300 shadow-sm hover:shadow-md transition-all"
                                >
                                    <p className="break-all font-semibold text-gray-700 text-sm">{file.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">{formattedDate}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="h-full w-full flex items-center justify-center">
                            <p className="text-[#b8b8b8] text-2xl">No recent files</p>
                        </div> 
                    )}

                </div>
            </div>

            {/*Canvas elements*/}
            <canvas ref={canvasInputRef} id="canvasInput" hidden/>
            <canvas ref={canvasOutputRef} id="canvasOutput" hidden/>


            <div className="flex justify-start w-[90%]">
                <h1 className="text-[24px]">File Type</h1>
            </div>

            <div className="w-[90%] flex flex-row mt-5">
                <div className="border-1 w-[330px] h-[350px] p-2 rounded-lg bg mr-5 hover:bg-[#C9DCFF99] transition-transform duration-300 ease-in-out hover:scale-105">
                    <input id="typeOfFile" type="radio"/><br />
                    <label htmlFor="typeOfFile" className="w-full h-full flex flex-col">
                        <h1 className="text-[20px] font-medium">Proof of Identity</h1>
                        <ul className="list-disc pl-5">
                            <li>South African Smart ID Card</li>
                            <li>Green Barcoded ID Book</li>
                            <li>Valid Passport (for South African citizens and foreign nationals)</li>
                            <li>Drivers License</li>
                        </ul>
                    </label>
                </div>

                <div className="border-1 w-[330px] h-[350px] p-2 rounded-lg bg mr-5 hover:bg-[#C9DCFF99] transition-transform duration-300 ease-in-out hover:scale-105">
                    <input id="typeOfFile" type="radio" /><br />
                    <label htmlFor="typeOfFile" className="w-full h-full flex flex-col">
                        <h1 className="text-[20px] font-medium">Proof of Residential Adrress</h1>
                        <ul className="list-disc pl-5">
                            <li>Utility Bills (e.g, electricity, water, or rates bills)</li>
                            <li>Bank Statements</li>
                            <li>Lease or Rental Agreements</li>
                            <li>Municipal Rates and Taxes Iinvoices</li>
                            <li>TelePhone or Cellular Account Statements</li>
                            <li>Insurance Policy Documents</li>
                            <li>Motor Vehicle License Documents</li>
                            <li>Retail Store Account Statements</li>
                        </ul>
                    </label>
                </div>

                <div className="border-1 w-[330px] h-[350px] p-2 rounded-lg bg mr-5 hover:bg-[#C9DCFF99] transition-transform duration-300 ease-in-out hover:scale-105">
                    <input id="typeOfFile" type="radio" /><br />
                    <label htmlFor="typeOfFile" className="w-full h-full flex flex-col">
                        <h1 className="text-[20px] font-medium">Additioinal Documents</h1>
                        <ul className="list-disc pl-5">
                            <li>Affidavit or Police Statement</li>
                            <li>Proof of INcome Tax Number</li>
                            <li>Cancelled Cheque or Bank Statement</li> {/*repeated document */}
                            <li>Tax Clearance Certificate</li>
                            <li>Pay Slips or Employment Contracts</li>
                            <li>Authority Documents(if acting on behalf of another)</li>
                        </ul>
                    </label>
                </div>
            </div>

            <div className="flex flex-row w-[90%] mt-10 mb-30">
                <button className="p-2 rounded-lg text-white bg-[#F21111] mr-10 w-[152px]">Cancel</button>
                <button className="p-2 rounded-lg text-white bg-[#3376F3] w-[152px]">Submit</button>
                <button onClick={() => { 
                    const canvas = canvasOutputRef.current!;
                    if (canvas) {
                        generatePDF(canvas);
                    }
                    }}
                    className="p-2 rounded-lg text-white bg-[#3376F3] w-[152px]"
                >
                Download PDF
                </button>
            </div>
        </div>
        </div>
    )
}