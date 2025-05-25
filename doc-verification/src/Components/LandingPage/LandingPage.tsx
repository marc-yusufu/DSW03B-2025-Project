import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";



function LandingPage(){
    return(
        <div className="font-sans"> 
            <div className="bg-[#4A89FF] w-screen h-[730px] flex rounded-br-[50px]">
                <div>
                    <NavBar/>
                </div>
                <div className="mt-[185px] w-[60%] ml-7 pl-10">
                    <p className="text-6xl font-semibold text-white">Get your documents verified</p>
                    <p className="text-4xl text-white mt-5">Quick and Simple</p>
                    <p className="text-white mt-7 text-2xl">From upload to approval in minutes--experience <br />
                        the efficiency of our smart document verfication system</p>
                    <button className="rounded-2xl bg-white w-[181px] h-[51px] mt-20 text-[#3376F3] text-2xl">Get Started</button>
                </div>
                <div className="flex justify-end h-[450px] mt-[200px]">
                    <img src="/images/magnifying-glass.png" alt="" className="w-[500px] h-[auto] -rotate-16"/>
                </div>

            </div>
            <div className="w-full text-center">
                <div className="mt-10 mb-5">
                    <p className="text-5xl font-semibold">How it works? <br /> in just 3 easy steps</p>
                </div>                    
                <div className=" flex flex-row w-[80%] m-auto mt-15 pl-10 pr-10 justify-around">
                    <p className="p-5 text-3xl bg-[#6FA1FF] rounded-full w-[80px] h-auto text-white">1</p>
                    <p className="p-5 text-3xl bg-[#3376F3] rounded-full w-[80px] h-auto text-white">2</p>
                    <p className="p-5 text-3xl bg-[#242760] rounded-full w-[80px] h-auto text-white">3</p>
                </div>
                <div className="w-[80%] mt-5 m-auto flex flex-row justify-between pl-10 pr-10">

                    <div className="w-[400px] flex-col flex justify-center items-center">
                        <h1 className=" font-medium text-[24px] mb-3 -mt-7.5">Smart Verification Begins</h1>
                        <p className="text-[20px] ">Select and upload your <br />ID, certificate, or form <br />from any device.</p>
                    </div>
                    <div className="w-[400px] flex-col flex justify-center items-center">
                        <h1 className=" font-medium text-[24px] mb-3">Smart Verification Begins</h1>
                        <p className="text-[20px]">Our AI analyzes and <br />checks the document for <br />authenticity and <br />accuracy in seconds.</p>
                    </div>
                    <div className="w-[400px] flex-col flex justify-center items-center">
                        <h1 className=" font-medium text-[24px] mb-3">Smart Verification Begins</h1>
                        <p className="text-[20px]">Receive verified results <br />instantly--ready to <br />download, share, or <br />store.</p>
                    </div>
                    
                </div>
            </div>
            <div className="font-sans w-[85%] m-auto flex mt-15">
                <div className="w-[60%] mt-5">
                    <p className="font-bold text-5xl">Experience <span className="text-[#3376F39E]">faster approvals</span>,<br /> 
                        <span className="text-[#003AA5]">AI-driven accuracy</span>, <br />and  
                        <span className="text-[#BD71FF]"> secure digital verification</span>, <br />all in one place.
                    </p>
                    <div className="absolute -bottom-222 left-170">
                        <button className="bg-[#3376F3] p-1 w-[160px] text-white rounded-[10px] text-[20px]">Get Started</button>
                    </div>
                    
                </div>
                <div className="flex justify-end h-[437px] w-[40%]">
                    <img src="/images/upload-buddy.png" alt="" className="w-[500px] h-auto"/>
                </div>
                
            </div>
            <div className="flex justify-center mt-5">
                <Footer/>
            </div>
            

        </div>
    )
}
export default LandingPage;