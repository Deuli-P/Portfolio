'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Burger from "./Burger";
import { links } from "../../../lib/data";
import Element from './../Element';
import CTA from "./../../CTA";

const HeaderMobile = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
    const HandleOpen = () => {
      setIsOpen(!isOpen);
    }
  
      return ( 
          <nav className={`w-full h-[60px] min-w-[320px] flex justify-end items-center relative md:hidden transition-all duration-300 `}>
            <div className="absolute right-[80px]">
              <CTA>
                  <a href='#contact' className='flex gap-2 items-center '>
                      <span className='text-background'>Contact moi</span>
                  </a>
              </CTA> 
            </div>
            <div className="flex flex-row gap-5 justify-beteween absolute items-center right-8 z-50">
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
              )
              : 
                null
            }
          </nav>
      )
  }
  

export default HeaderMobile;