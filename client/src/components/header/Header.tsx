'use client';
import CTA from "@/components/CTA";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Burger from "./mobile/Burger";
import Element from "./Element";
import { motion } from "framer-motion";
import { links } from "./../../lib/data";


const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
    const HandleOpen = () => {
      setIsOpen(!isOpen);
    }


  

    return (
        <header className={` z-20 w-full 2xl:w-[1536px] md:h-[88px] 2xl:rounded-b-md bg-white p-0 flex items-center md:justify-center ${isOpen? "border-white" :"border-secondary"} border-b-2 2xl:border-b-0 2xl:shadow-lg duration-150 transition-all`}>
            <nav className="md:px-8 p-4 md:py-4 flex flex-row justify-between w-full max-w-[1440px] ">
                <div className="s-6 ">
                    <Image 
                        src={"/Logo.webp"}
                        alt='Logo'
                        width={54}
                        height={54}
                        />
                </div>
                {/* Desktop */}
                <div className="hidden md:flex justify-center items-center">
                    <ul className="flex justify-center items-center gap-5">
                    {links.map((link, index) => {
                        return(
                            <Element key={index} hash={link.hash} name={link.name}/>
                        )
                    })}
                    </ul>
                </div>
                {/* Desktop */}
                <div className="flex flex-row gap-4 justify-end">
                    <CTA>
                        <a href='#contact' className='flex gap-2 items-center '  >
                            <span className='text-background'>Contact moi</span>
                        </a>
                    </CTA> 
                    <div className="flex flex-row gap-5 items-center md:hidden  ">
                        <div className=" size-auto ">
                            <Burger HandleOpen={HandleOpen} isOpen={isOpen}/>
                        </div>
                    </div>
                </div>
            </nav>
            { isOpen ?
                (
                  <motion.div 
                  className={`absolute z-30 top-[85px] border-[#e5e7eb] border-b-2 p-4 w-full bg-white rounded-b-lg`}
                  initial={{ y: -100, opacity: 0, scale: 0.2}}
                  animate={{ y: 0, opacity: 1, scale:1 }}
                  exit={{ y: -100, opacity: 0, scale: 0.2}}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
                    >
                    <ul className="flex flex-col justify-between items-center w-full text-center">
                        {links.map((link, index) => {
                            return(
                                <Element key={index} hash={link.hash} name={link.name} handle={()=>setIsOpen(false)}/>
                            )
                    })}
                    </ul>
                  </motion.div>
                )
                : 
                  null
              }
        </header>
    )
}


export default NavBar;