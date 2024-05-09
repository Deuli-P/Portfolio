'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Burger from "./Burger";
import { links } from "../../../lib/data";
import Element from './../Element';
import CTA from "./../../CTA";
import Image from "next/image";

const HeaderMobile = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
    const HandleOpen = () => {
      setIsOpen(!isOpen);
    }
  
      return ( 
          <nav className={`w-full  min-w-[320px] flex justify-between items-center relative md:hidden transition-all duration-300 `}>
            { isOpen ?
              (
                <motion.div 
                className={`absolute z-30 top-[72px] right-1 border-[#e5e7eb] border-b-2 p-4 w-full bg-white rounded-b-lg`}
                initial={{ y: -100, opacity: 0, scale: 0.2}}
                animate={{ y: 0, opacity: 1, scale:1 }}
                exit={{ y: -100, opacity: 0, scale: 0.2}}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
                  >
                  <ul className="flex flex-col justify-between items-center w-full text-center">
                      {links.map((link, index) => {
                          return(
                              <Element key={index} hash={link.hash} name={link.name}/>
                          )
                  })}
                  </ul>
                </motion.div>
              )
              : 
                null
            }
          </nav>
      )
  }
  

export default HeaderMobile;