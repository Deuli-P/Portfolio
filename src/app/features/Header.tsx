"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "./../../lib/data";
import { useActiveSectionContext } from "./../../app/context/active-section-context";
import Burger from "@/components/header/Burger";
import type { SectionName } from "./../../lib/types";
import CTA from "@/components/CTA";

const NavBar = () => {

    return (
        <header className=" sticky z-10 top-4">
            <Nav />
        </header>
    )

}

const Nav = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const HandleOpen = () => {
    setIsOpen(!isOpen);
  }

    return ( 
        <nav className={`w-full h-[60px] mt-4 flex justify-end items-center relative md:justify-center transition-all duration-300 `}>
          <div className="flex flex-row gap-5 justify-beteween absolute items-center md:hidden right-8 top z-50">
            <CTA>
              <a href='#contact' className='flex gap-2 items-center '>
                  <span className='text-background'>Contact moi</span>
              </a>
              </CTA> 
            <div className=" size-8 ">
              <Burger HandleOpen={HandleOpen} isOpen={isOpen}/>
            </div>
          </div>
          { isOpen ?
          (
          <motion.div 
            className={`absolute top-[60px] right-1 border-[#e5e7eb] border-2 p-4 w-full bg-white rounded-lg`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
            <ul className="flex flex-col justify-between items-center w-full text-center">
                {links.map((link, index) => {
                    return(
                        <Element key={index} hash={link.hash} name={link.name}/>
                    )
            })}
            </ul>
          </motion.div>
          ): null
          }
          <div className="hidden md:block shadow-lg shadow-ring rounded-full mt-8 px-4 py-2 bg-[#e5e7eb]">
            <ul className="flex justify-center items-center gap-5">
                {links.map((link, index) => {
                    return(
                        <Element key={index} hash={link.hash} name={link.name}/>
                    )
            })}
            </ul>
          </div>
        </nav>
    )
}

type ElementProps = {
    hash: string;
    name: SectionName;
}

const Element = ({hash, name}: ElementProps) =>{

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [ isSelected, setIsSelected ] = useState<boolean>(false)

    const toggleActive = (name:SectionName) => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
    }

    useEffect(()=> {
      if(activeSection === name ) {
        setIsSelected(true)
      }
      else{
        setIsSelected(false)
      }
    },[activeSection,name])



    return(
        <motion.li
                className="h-3/4 flex items-center justify-center relative w-[70%]"
                key={hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={` w-full p-3 transition z-[2] ${  isSelected ? "text-slate-200" : "text-slate-00" }`}
                  href={hash}
                  onClick={() => { toggleActive(name) }}
                >
                  {name}
                  {/* element qui surligne le lien actif  avec animation */}
                  { isSelected ?
                    (
                        <motion.span
                        className="bg-gray-800 w-full rounded-full p-3 absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                        }}
                        ></motion.span>
                    )
                  : 
                    null
                  }
                </Link>
              </motion.li>
    )
}

export default NavBar;