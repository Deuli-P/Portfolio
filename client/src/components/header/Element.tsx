'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useActiveSectionContext } from "./../../app/context/active-section-context";
import type { SectionName } from "./../../lib/types";


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

export default Element;