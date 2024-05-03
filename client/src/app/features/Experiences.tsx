'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";




const Expériences =() => {

    const [ request, setResquest] = useState(false);

    const { ref } = useSectionInView("Experiences", 0.5);

    const [ dataExperience , setDataExperience ] = useState([]);

    const getData = async ()=> {
        try{ 
           const response = await fetch('http://localhost:3002/v01/experiences/all',{ 
                method: 'GET',
                headers: {
                     'Content-Type': 'application/json',
                }
           })
           if(!response.ok){
                throw new Error('Erreur lors de la requête getData Experience');
           }
            const data = await response.json();
            console.log("Experiences:",data);
            
            setDataExperience(data);
            setResquest(true);

        }
        catch(errors){
            console.log("Error Experience Fetching:",errors);
        }
    }
    useEffect(()=> {
        getData()
    },[]);

    return(
        <section id="experience" className="w-full justify-center flex " ref={ref}>
            <div className="flex flex-col justify-start gap-4 w-full items-center pt-22 md:mb-22 mb-12">
                <h3 className="text-3xl font-bold text-center mb-4 ">Expériences</h3>
                <div className="flex flex-col gap-4 w-full justify-center items-center">
                    { request ?
                    (
                        dataExperience.map((item, idx) =>{ 
                            return(
                                <Article entreprise={item} key={idx}/>
                            )
                        })
                    )
                    :
                    (
                        <div className="w-full flex flex-col gap-4 md:max-w-[800px] mb-12 md:mb-20 justify-center items-center" >
                            <LoadingArticle  />
                            <LoadingArticle  />
                        </div>
                    )
                }
                </div>
            </div>
        </section>
    )
}

export default Expériences;


interface ArticleProps {
    entreprise: {
        name: string;
        job: string;
        localisation: string;
        website: string;
        description: string;
        logo: string;
        startDate: number;
        endDate?: number;
        technologies: string[];
        avis: {
            surname: string;
            name: string;
            job: string;
            picture: string;
            comment: string;
            BGColor: string;
        };
    };
}

const Article: React.FC<ArticleProps> = ({ entreprise }) => {

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
                className={`${isOpen? "bg-[#740cdc]": "bg-[#490c86de]"} py-2 px-4 text-foreground font-semibold text-xl flex flex-row justify-between items-center rounded-md `}
                onClick={onToggle}
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
                className={`bg-[#241d41] ${isOpen ? null: "hidden" } px-6 py-4 rounded-md flex flex-row-reverse md:flex-col md:gap-4 justify-between items-start overflow-hidden`}
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
                                <div 
                                    key={idx}
                                    className="bg-[#a5abf3] py-1 px-4 m-1 text-[#141e26] rounded-full w-auto"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </article>
    )
}

const LoadingArticle = () => {


    return(
        <article className=" w-full ">
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.2, type: "tween"}}
                className="bg-secondary w-full h-16 text-foreground font-semibold text-xl flex flex-row justify-between items-center rounded-md"/>
        </article>
    )
}