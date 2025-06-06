import { useContext } from "react";
import NavBarHome from "../Common/NavBarHome";
import Upload from "../UploadPage/Upload";
import AppContext from "../Context/Context";

export default function Home(){

    const {fileNameContext} = useContext(AppContext);
    return(
        <div>
            <div><NavBarHome/></div>
        <div className="w-full flex  justify-around flex-row h-[50%]">
            <div className="flex flex-col w-[60%]"> 
                <div className="flex flex-row w-full items-center mt-10 justify-between">
                    <div className="flex flex-row bg-[#DEDEDEC7] w-full justify-between h-full items-center p-2 rounded-lg">
                        <input type="text" placeholder="Search..." className="hover:cursor-text w-full"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    <button className="w-[150px] h-[40px] bg-[#3376F3] text-white rounded-lg hover:bg-blue-600">Upload</button>
                </div>
                <div className="w-[100%] h-[200px] mt-10 flex flex-row justify-between border-dashed border-1 border-gray-300">
                    <p className="p-10 self-center font-light">No recently uploaded files</p>
                    <label hidden={true} className=" w-1/5 relative block rounded-xl border border-gray-300 p-4 bg-gray-100 cursor-pointer transition peer-checked:border-blue-500 peer-checked:shadow-md">
                        <input
                            type="radio"
                            name="select-card"
                            className="peer hidden"
                            // your onChange here
                        />
                        <div className="absolute top-2 right-2 w-5 h-5 border-2 border-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>

                        <div className="text-sm font-medium mb-1">File name</div>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L9 12.414l4.707-4.707z" />
                            </svg>
                            Verified
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">Download</button>
                            <button className="border border-gray-300 p-1 rounded hover:bg-gray-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 12v1.5A4.5 4.5 0 008.5 18h7a4.5 4.5 0 004.5-4.5V12M12 8v8m4-4H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </label>
                </div>
            </div>
            <div className="w-[30%] flex flex-col">
                <h1>Recently uploaded</h1> 
                <div className="border-1 rounded-lg w-full bg-[#E5E5E5] mt-10 h-full">

                </div>
            </div>
        </div>
        </div>
    )
}