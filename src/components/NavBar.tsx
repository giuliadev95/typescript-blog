'use client'
import { useState } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { NavBarData } from "../data/NavBarData";

export default function NavBar() {
    // Set the nav menu as invisible by default (false)
    const [showNavbar, setShownavbar] = useState<boolean>(false);

    // Avoid the body from scrolling down when the navbar-menu is opened
    useEffect(() => {
	if (showNavbar) {
		document.body.style.overflow = 'hidden';
	} else document.body.style.overflow = 'scroll';
	return () => {};
    }, [showNavbar]);   

    // return the body
    return(
        <>
             {/** On Mobile */}
            <div className="lg:hidden flex justify-start items-center gap-4 min-w-[100%] h-20 p-[1rem] fixed top-0 left-0 bg-[#1f232c] border-b-[1px] border-b-[#2b3038]">
                {
                    !showNavbar ? (
                        <>
                            <FaBars
                                className="text-[24px] text-white font-thin"
                                onClick={()=> {
                                    setShownavbar(true);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <IoClose
                                className="text-[24px] text-white font-thin"
                                onClick={()=> {
                                    setShownavbar(false);
                                }}
                            />
                        </>
                    )
                }
            </div>
            <div>   
                {
                    showNavbar && (     
                        <div className="lg:hidden flex flex-col items-center gap-5 md:gap-7 px-4 py-5 min-h-[100vh] min-w-[100%] mt-0 fixed top-20 left-0 bg-[#2b3038]">
                            <ul className="flex justify-center items-center gap-4">
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/giuliamoukouyou/" rel="noopener noreferrer">                          
                                        <BiLogoLinkedin
                                            className="font-semibold text-3xl md:text-4xl border p-1 text-white"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <hr className="min-w-[10rem] text-white font-semibold"/>
                            <ul className="flex flex-col gap-4">
                                {NavBarData.map((item)=> {
                                    const Icon = item.icon;
                                    return(
                                        <li key={item.name}>
                                            <button
                                                className="flex items-center justify-center gap-2 text-lg text-white font-normal hover:underline cursor-pointer"
                                                onClick={() => {item.onClick?.();
                                                setShownavbar(false);
                                                }}>
                                            <Icon/>
                                            {item.name}
                                            </button>
                                        </li>                  
                                    )
                                })}                              
                            </ul>
                        </div>
                    )
                }
            </div>
            {/** On Desktop */}
            <div className="hidden lg:px-16 xl:px-64 lg:flex justify-center items-center gap-4 min-w-[100%] h-20 p-[1rem] fixed top-0 left-0 bg-[#1f232c] border-b-[1px] border-b-[#2b3038]">
               <ul className="flex gap-10">
                    {NavBarData.map((item)=> {
                        const Icon = item.icon;
                        return(
                            <li key={item.name}>
                                <button
                                    className="flex items-center justify-center gap-2 text-lg text-white hover:underline cursor-pointer"                                    
                                    onClick={() => {item.onClick?.();
                                    setShownavbar(false);
                                    }}>
                                <Icon/>
                                {item.name}
                                </button>
                            </li>                  
                        )
                    })}                              
                </ul>
            </div>     
        </>
    )
}