'use client';
import CTAPrimary from "@/components/CTA/CTAPrimary";
import { useState } from "react";
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
        <header className={`absolute top-0 z-20 w-full 2xl:w-[1536px] 2xl:rounded-b-md p-0 flex items-center md:justify-center ${isOpen? "border-background" :"border-secondary"} border-b-2 md:border-none duration-150 transition-all`}>
            <nav className="md:px-8 p-4 md:py-4 flex flex-row justify-between w-full max-w-[1100px] min-h-2O ">
                <div className="flex flex-row gap-5 items-center md:hidden  ">
                    <div className=" size-auto ">
                        <Burger HandleOpen={HandleOpen} isOpen={isOpen}/>
                    </div>
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
                    <CTAPrimary>
                        <a href='#form-contact' className='flex gap-2 items-center '  >
                            <span >Contact moi</span>
                        </a>
                    </CTAPrimary> 
                    
                </div>
            </nav>
            { isOpen ?
                (
                  <motion.div 
                  className={`absolute z-30 top-[85px] border-[#e5e7eb] border-b-2 p-4 w-full bg-background rounded-b-lg`}
                  initial={{ y: -100, opacity: 0, scale: 0.2}}
                  animate={{ y: 0, opacity: 1, scale:1 }}
                  exit={{ y: -100, opacity: 0, scale: 0.2}}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
                    >
                    <ul className="flex flex-col justify-between items-center text-center gap-2">
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