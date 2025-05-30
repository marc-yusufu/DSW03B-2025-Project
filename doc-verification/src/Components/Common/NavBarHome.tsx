

function NavBarHome(){
    return(
    <div className="w-full m-2 mb-5 flex justify-center ">
        <nav className="flex items-stretch w-[98%] bg-white rounded-3xl justify-between">
            <div className="p-5">
                <a href="#">Logo</a>
            </div>
            <div className="flex items-stretch p-5">                
                <div className="pl-10">
                    <a href="#" className="text-black">
                        <img src="/images/plus (2).png" alt="" className="size-6"/>
                    </a>
                </div>
                <div className="pl-10">
                    <a href="#" className="text-black">
                        <img src="/images/blue-bell.png" alt="" className="size-6"/>
                    </a>
                </div>
                <div className="pl-10">
                    <a href="#" className="text-black">
                        <img src="/images/blue-setting.png" alt="" className="size-6"/>
                    </a>
                </div>

                <div className="pl-10">
                    <a href="#" className="text-black">
                        <img src="/images/blue-user.png" alt="" className="size-6"/>
                    </a>
                </div>
            </div>

        </nav>
    </div>
    )
}
export default NavBarHome;