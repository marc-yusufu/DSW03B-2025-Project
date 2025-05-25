
function NavBar(){
    return(
    <div className="w-full m-2 mt-5 flex justify-center fixed top-0 left-0">
        <nav className="flex items-stretch w-[98%] bg-white/23 rounded-3xl justify-between backdrop-blur-sm z-50">
            <div className="p-5">
                <a href="#">Logo</a>
            </div>
            <div className="flex items-stretch p-5">                
                <div className="pl-10">
                    <a href="#" className="text-black">Log in</a>
                </div>
                <div className="pl-10">
                    <a href="#" className="text-black">Services</a>
                </div>
                <div className="pl-10">
                    <a href="#" className="text-black">About</a>
                </div>
            </div>

        </nav>
    </div>
    )
}
export default NavBar;