import { useState, useRef, type RefObject } from "react"
import NavBarHome from "../Common/NavBarHome";
import Footer from "../Common/Footer";
import Switch from "react-switch";


export default function SettingPage(){
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageUrl(imageUrl);
      }
    };

    const [isOn, setIsOn] = useState({
        notifications: false,
        emailNotification: false,
        pushNotification: false,
        smsAlert: false,
        securityAlert: false,
    })

    const handleSwitch = (key: keyof typeof isOn, nextIsOn: boolean) => {
        setIsOn(prev => ({
            ...prev,
            [key]: nextIsOn,
        }));
    }

    const section1 = useRef<HTMLDivElement>(null);
    const section2 = useRef<HTMLDivElement>(null);
    const section3 = useRef<HTMLDivElement>(null);
    const section4 = useRef<HTMLDivElement>(null);
    const section5 = useRef<HTMLDivElement>(null);
    const section6 = useRef<HTMLDivElement>(null);

    function handleScroll(ref: RefObject<HTMLDivElement>){
        ref.current?.scroll({behavior: "smooth"})
    }

    return(
        <div>
            <div><NavBarHome/></div>
            <div className="w-[90% m-10 flex flex-row">
                {/*side panel*/}
                <div className="w-[20%]">
                    <div className="bg-[#DEDEDEC7] rounded-lg items-center p-2 flex justify-between flex-row">
                        <input type="text w-full"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    <div className="w-full mt-10">
                        <a className="flex flex-row p-2 items-center hover:border-1 hover:cursor-default active:scale-95 transition-transform duration-100 rounded-lg">
                            <img src="/images/user (2).png" alt="" className="size-4 mr-3"/>
                            <p>Account Settings</p>
                        </a>

                        <a className="flex flex-row p-2 items-center hover:border-1 hover:cursor-default active:scale-95 transition-transform duration-100 rounded-lg">
                            <img src="/images/lock.png" alt="" className="size-4 mr-3"/>
                            <p>Security Settings</p>
                        </a>

                        <a className="flex flex-row p-2 items-center hover:border-1 hover:cursor-default active:scale-95 transition-transform duration-100 rounded-lg">
                            <img src="/images/bell.png" alt="" className="size-4 mr-3"/>
                            <p>Notification Preferences</p>
                        </a>

                        <a className="flex flex-row p-2 items-center hover:border-1 hover:cursor-default active:scale-95 transition-transform duration-100 rounded-lg">
                            <img src="/images/moon.png" alt="" className="size-4 mr-3"/>
                            <p>Theme</p>
                        </a>

                        <a className="flex flex-row p-2 items-center hover:border-1 hover:cursor-default active:scale-95 transition-transform duration-100 rounded-lg">
                            <img src="/images/user-headset (2).png" alt="" className="size-4 mr-3"/>
                            <p>Support & Feeedback</p>
                        </a>
                    </div>
                </div>

                {/*Main*/}
                <div className="w-[90%] ml-10 flex flex-col">
                    <h1 className=" ml-5 font-medium text-2xl">Account Settings</h1>
                    <div className="border-b-1 border-b-black w-full mt-2"></div>

                    <div className="w-full h-full flex flex-col mt-15 ml-15">
                        <label htmlFor="profilePicture" className="border-1 border-black w-[170px] h-[170px] flex justify-center items-center rounded-full" >
                            {imageUrl ? (  
                                <img src={imageUrl} alt="selected" className="w-full h-full object-cover overflow-hidden rounded-full border-1 border-gray-400"/>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 opacity-50">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            )}
                        </label>
                        <input id="profilePicture" type="file" accept="image/*" onChange={handleImageChange} hidden={true}/>

                        <div className="mt-10">
                            <h1 className="font-medium">Name</h1>
                            <input type="text" className="p-2 mt-2 w-[50%] border-1 border-[#DEDEDEC7] rounded-lg" />

                            <h1 className="font-medium">Email</h1>
                            <input type="email" className="p-2 mt-2 w-[50%] border-1 border-[#DEDEDEC7] rounded-lg" />

                            <h1 className="font-medium">Password</h1>
                            <input type="password" className="p-2 mt-2 w-[50%] border-1 border-[#DEDEDEC7] rounded-lg" />
                        </div>
                    </div>

                    <h1 className="mt-10 ml-5 font-medium text-2xl">Security Settings</h1>
                    <div className="border-b-1 border-b-black w-full mt-2"></div>

                    <div className="w-full h-full flex flex-col mt-7 ml-15">
                        <h2 className="text-[18px]">Login Activity</h2>
                        <div className="w-[80%] h-[100px] p-10 border-1 border-dashed rounded-lg text-center mt-5 mb-5">No activity</div>
                        <h2 className="text-[18px]">Session Timeout</h2>
                        <div className="w-[80%]  mt-5 flex justify-around">
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">5 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">10 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">15 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">30 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">60 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">90 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">130 min</button>
                            <button className="w-[85px] border-1 rounded-full hover:bg-[#6B98FD]">200 min</button>
                        </div>
                    </div>

                    <h1 className="mt-10 ml-5 font-medium text-2xl">Notification Preferences</h1>
                    <div className="border-b-1 border-b-black w-full mt-2"></div>

                    <div className="w-[90%]  mt-5 ml-15">
                        <div className="flex flex-row w-full justify-between m-5 text-[18px]">
                            <p>Notification</p>
                            <Switch onChange={checked => handleSwitch('notifications', checked)} checked={isOn.notifications} />
                        </div>
                        <div className="flex flex-row w-full justify-between m-5 text-[18px]">
                            <p>Email Notification</p>
                            <Switch onChange={checked => handleSwitch('emailNotification', checked)} checked={isOn.emailNotification} />
                        </div>
                        <div className="flex flex-row w-full justify-between m-5 text-[18px]">
                            <p>Push Notification</p>
                            <Switch onChange={checked => handleSwitch('pushNotification', checked)} checked={isOn.pushNotification} />
                        </div>
                        <div className="flex flex-row w-full justify-between m-5 text-[18px]">
                            <p>SMS Alert</p>
                            <Switch onChange={checked => handleSwitch('smsAlert', checked)} checked={isOn.smsAlert} />
                        </div>
                        <div className="flex flex-row w-full justify-between m-5 text-[18px]">
                            <p>Secrity Alert</p>
                            <Switch onChange={checked => handleSwitch('securityAlert', checked)} checked={isOn.securityAlert} />
                        </div>
                    </div>

                    <h1 className="mt-10 ml-5 font-medium text-2xl">Support & FeedBack</h1>
                    <div className="border-b-1 border-b-black w-full mt-2"></div>

                    <div className="w-full  mt-5 ml-15 flex flex-col">
                        <div className="flex justify-between w-[90%] flex-row mb-5">
                            <p className="text-[18px]">Help Center: Access FAQs and support articles</p>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                        <h2 className="text-[18px]">Contact Support</h2>
                        <div className="font-normal text-[14px] ml-5 mb-5">
                            <p>Tel: +27 65 456 7890</p>
                            <p>Email: support@mm.com</p>
                        </div>
                        <h2 className="text-[18px]">Submit FeedBack</h2>
                        <input type="text" placeholder="Max 120 Characters" className=" ml-5 w-[80%] h-[100px] p-10 border-1 rounded-lg placeholder-center py-2 mt-5 mb-5"/>
                        <div className="w-[80%] flex justify-end">
                            <button className="bg-[#3376F3] w-[110px] text-white hover:bg-blue-600 rounded-full self-end">Submit</button>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}