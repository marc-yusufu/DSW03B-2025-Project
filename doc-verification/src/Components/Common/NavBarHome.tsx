import { useRef, useState, type RefObject } from "react";
import { Link } from "react-router-dom";



function NavBarHome(){

    const [clicked, setClicked] = useState(true)
    const [bgColour, setBgColour] = useState(null)
    const [notifImage, setNotifImage] = useState<HTMLDivElement | null>(null)
    const clickRef = useRef<HTMLDivElement | null>(null);

    function handleClicks(ref: RefObject<HTMLDivElement | null>){
        if(clicked){
            //setNotifImage(changeImage)
        }
    }

    function changeImage(){
        return(
            <div className="rounded-full bg-[#3376F3]">
                <img src="/images/white-bell.png" alt="" className="size-6"/>
            </div>
        )
    }
    
    return(
    <div className="w-full m-2 mb-5 flex justify-center ">
        <nav className="flex items-stretch w-[98%] bg-white rounded-3xl justify-between">
            <div className="p-5">
                <Link to="/Home">
                <a href="#">Logo</a>
                </Link>
            </div>
            <div className="flex items-stretch p-5">                
                <div ref={clickRef} className="pl-10 active:scale-95 transition-transform duration-100 hover:">
                    <Link to="/Upload">
                    <button className="text-black">
                        <img src="/images/plus (2).png" alt="" className="size-6"/>
                    </button>
                    </Link>
                </div>
                <div className="pl-10">
                    <button className="text-black">
                        <img src="/images/blue-bell.png" alt="" className="size-6"/>
                    </button>
                </div>
                <div className="pl-10">
                    <Link to="/Settings">
                    <button className="text-black">
                        <img src="/images/blue-setting.png" alt="" className="size-6"/>
                    </button>
                    </Link>
                </div>

                <div className="pl-10">
                    <button className="text-black">
                        <img src="/images/blue-user.png" alt="" className="size-6"/>
                    </button>
                </div>
            </div>

        </nav>
    </div>
    )
}
export default NavBarHome;