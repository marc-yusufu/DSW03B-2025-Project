import { useState, useRef, use } from "react"
import NavBarHome from "../Common/NavBarHome";


export default function Upload(){

    const [fileName, setFileName] = useState("");
    const [typeOfFile, setTypeOfFile] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputRef =()=>{
        if(inputRef.current){
            inputRef.current.click();
        }
    }
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
                    <label htmlFor="fileUpload" className="border-dashed border-1 w-full rounded-lg items-center justify-center flex bg-[#C9DCFF99] hover:bg-blue-200">
                        {fileName || 
                        <div className="flex justify-center flex-col w-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>

                            <p className="p-5">Max 120 MB (PNG, JPEG, PDF)</p>
                            <p className="p-5">Drag and drop or</p>
                            <button onClick={handleInputRef} className="bg-[#3376F3] w-[152px] p-2 text-white hover:bg-blue-600 rounded-lg">Browse file</button>

                        </div>}
                    </label>
                    <input type="file"
                    ref={inputRef}
                    hidden = {true}
                    id="fileUpload"
                    onChange={(e)=>{
                        const file = e.target.files?.[0];
                        if (file){
                            setFileName(file.name)
                        }
                    }}/>
                </div>

                <div className="border-1 rounded-lg w-[30%] bg-[#E5E5E5]">
                     side block
                </div>
            </div>

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
            </div>
        </div>
        </div>
    )
}