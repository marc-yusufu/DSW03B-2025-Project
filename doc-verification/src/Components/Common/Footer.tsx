
function Footer(){
    return(
        
        <footer className="flex bg-[#4A89FF] w-[98%] rounded-3xl h-[320px] flex-col text-white mb-10">
            <div className="flex flex-row w-full justify-around border-b-1 border-b-white">
                <div className="flex items-center justify-center h-64">
                    <a href="">A</a>
                    <a href="">B</a>
                    <a href="">C</a>
                    <a href="">D</a>
                    <a href="">E</a>
                </div>
                <div className="flex flex-col p-10">
                    <h1 className="font-medium mb-5">Company</h1>
                    <a href="#">About us</a>
                    <a href="#">Services</a>
                    <a href="#">Community</a>
                    <a href="">Testimonial</a>
                </div>
                <div className="flex flex-col p-10">
                    <h1 className="font-medium mb-5">Contact</h1>
                    <p>+27 65 456 7890</p>
                    <p>support@mm.com</p>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between pl-30 pr-30 m-7">
                <div>
                    <p>2025</p>
                </div>
                <div className="flex flex-row justify-around w-[40%]">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Legal</a>
                </div>
            </div>
        </footer>
    
    )
}

export default Footer;