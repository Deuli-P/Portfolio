'use client'
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExperienceProps } from "@/lib/types";
import Technologies from "../Technologies";



const Article = ({ entreprise }:ExperienceProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    const { name, job, localisation, website, description, logo, startDate, endDate, technologies } = entreprise;

    const variant = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 },
    };


    return (
        <article 
            className={`w-full text-background flex flex-col gap-2`}>
            <div 
                className={`${isOpen? "bg-foregroundAccent": "bg-[#551E5B]"} py-2 cursor-pointer px-4 text-foreground font-semibold text-xl flex flex-row justify-between items-center rounded-md `}
                onClick={()=>onToggle()}
            >
                <div className={``}>
                    <h4 className={`flex flex-col flex-start md:flex-row md:py-[12px] md:justify-start`}>
                        <span>{job ? job : "Job effectué"}</span>
                        <strong className='hidden md:flex'> @ </strong>
                        <span>{ name ? name : "Nom entreprise"}</span>
                    </h4>
                </div>
                <div className="md:flex md:flex-row md:gap-4 items-center">
                    <div className={`hidden md:block  `}>
                        <h4 className={`experience_collapse__top-h4 `}>
                            {startDate ? startDate : "Date de début"}
                            { endDate ? (<> - {endDate} </> ): null}
                        </h4>
                    </div>
                    <div className={`size-4 flex justify-center items-center relative`}>
                        <div className={` w-full h-[2px] rounded-full before:rounded-full bg-background before:w-full before:absolute before:top-[45%] before:right-0 before:transition-all duration-150 ease-in before:h-[2px] before:bg-background ${isOpen ? "before:rotate-0 before:opacity-0 ": "before:rotate-90 opacity:1"} `}/>
                    </div>
                </div>
            </div>
            <motion.div 
                animate={ isOpen ? "open" : "closed" }
                variants={variant}
                transition={{ duration: 0.4, type: "tween" }}
                className={`bg-[#551E5B] ${isOpen ? null: "hidden" } px-6 py-4 rounded-md flex flex-row-reverse md:flex-col md:gap-4 justify-between items-start overflow-hidden`}
            >
                <div className={`size-14 min-w-14 min-h-14 md:size-24 overflow-hidden flex justify-center items-center`}>
                    { logo? 
                        (
                        <Image 
                            className=" invert"
                            alt={`Logo ${name}`}
                            src={logo}
                            width={128}
                            height={128}
                            quality={65}
                            loading="lazy"
                            />
                        )
                        :
                        (
                            <div>
                                <span>Ici un logo</span>
                            </div>
                        )
                    }
                </div>
                <div className={`experience_collapse_bot_content-container maw-w-2/3 `}>
                    <div className={` flex flex-col gap-2 items-start min-h-14 `}>
                        <div className={`flex  gap-2 -translate-x-[3px] whitespace-nowrap text-ellipsis`}>
                            <IoLocation  className="size-6 text-[#740cdc]"/>
                            <span>{localisation ? localisation : " 124 rue des Champs, Paris 75008"}</span>
                        </div>
                        <div className={`flex gap-[7px] `}>
                            <FaExternalLinkAlt className="size-4 text-[#740cdc] whitespace-nowrap text-ellipsis"/>
                            <i className={`fa-solid fa-square-arrow-up-right`}/>
                            <a
                                href={website}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none underline underline-offset-2 text-foreground hover:text-accent transition-colors duration-300 ease-in-out whitespace-nowrap text-ellipsis "
                            >
                                {`Lien du site de l'entreprise`}
                            </a>
                        </div>
                    </div>
                    <div >
                        <p >{description ? description : "Description des missions effectués dans l'entreprise tout au long du contrat "}</p>
                        <div className={`w-full flex justify-start flex-wrap pb-4 mt-2`}>
                            {technologies.map((item, idx) => (
                                <Technologies key={idx} item={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </article>
    )
}

export default Article;