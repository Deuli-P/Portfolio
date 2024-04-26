'use client'

import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { IoArrowRedo } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CTA from "@/components/CTA";
import { FilterProvider, useFilterContext } from "../context/filter-projets-context";
import { DiVim } from "react-icons/di";
import { SortDate } from "@/components/Filter";

const Project = () => {

    const { ref } = useSectionInView("Projects", 0.5);

    return(
        <section id="projects" className="w-full my-10 justify-center flex md:min-h-[600px] flex-col " ref={ref}>
            <div className="w-full pt-20 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full p-4 text-center ">
                    <h3 className=" text-primary py-2 font-bold text-4xl whitespace-nowrap font-roboto ">
                       Mes Projets
                    </h3>
                    <p className=" text-lg "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo iusto nam sunt obcaecati aliquid mollitia. Incidunt amet id corporis a ullam repellendus obcaecati maiores. Soluta placeat ipsam unde nemo!</p>
                </div>
                <div className="w-full h-full flex flex-col items-end py-10 pb-[60px]">
                    <LastProjectCard image="https://images.pexels.com/photos/21660419/pexels-photo-21660419/free-photo-of-u-bahnhof-hafencity-universitat-a-hambourg-4.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title='Test Titre' alt='Quai de metro rouge' link='https://pexels.com' id="DEDKEER1222à" github='https://github.com/Deuli-P/'/>
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                <FilterProvider>
                    <Filter />
                    <div className="flex flex-col gap-4 w-full items-center justify-start">
                        <Card title="Sophie Bruel" id='RE3OE02EER' type="Web Developpement" alt="photo de l'architecte" image="/pierre-antoniutti-crete-400.webp"/>
                    </div>
                </FilterProvider>
            </div>
        </section>
    )
}

export default Project;

type CardProps = {
    title: string;
    image: string;
    alt: string;
    type: string;
    id: string;

}

const Card=({title,image,alt,type,id}:CardProps)=> {
    return (
        <Link href={`./projects/${id}`} className=" group w-full h-auto max-w-[350px] max-h-[452px] bg-red-400 article-height mb-4 overflow-hidden rounded-lg cursor-pointer shadow-2xl">
            <article className=" flex flex-col items-center sm:justify-between  shadow-lg bg-primary">
                <div className="w-full h-full max-h-[360px] overflow-hidden ">
                    <Image src={image} alt={alt} width={350} height={360} quality={65} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out " />
                </div>
                <div className=" text-background p-4 w-full h-full">
                    <h5 className=" text-lg font-semibold font-roboto">
                        {title}
                    </h5>
                    
                    <div className=" relative w-full h-full opacity-80">
                        <div className="opacity-0">i</div>
                        <p className=" absolute top-0 mb-[5px] transition-all duration-300 ease-in translate-y-0 group-hover:-translate-y-full group-hover:opacity-0">{type}</p>
                        <p className=" absolute top-0 transition-all duration-300 ease-in -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Afficher plus</p>
                    </div>
                </div>
            </article>
        </Link>

    )
}




const Filter = () => {

    const[ isOpen, setIsOpen ] = useState<boolean>(false);

    const { filter, setFilter } = useFilterContext();


    // type de filtre : 
        // bouton pour sort par date tiret/ fleche up/ fleche down
        // select pour les différentes catégories 
        // select pour les différentes technos avec des checkbox
        // select pour les type de taf ( SEO/ FRONT/ BACK/ FULLSTACK )


    const [ listShow , setListShow ] = useState()

    const [categories, setCategories] = useState();
    const [hovered, setHovered] = useState("");

    useEffect(() => {
        
 },[]);






    return(
        <div className="flex flex-row justify-start w-full h-full bg-red-400">

            <div 
                onClick={()=>{setIsOpen(!isOpen)}}
                className={`flex items-center h-10 justify-center py-1 px-[10px] rounded-full ${ !isOpen? "bg-secondary" : "bg-primary"}`}
                >
                <span className={`${!isOpen? "text-primary": "text-background"} text-center text-lg`}> Filtrer</span>
            </div>
            { !isOpen ?
                null 
                : 
                (
                    <div className="flex flex-row w-full flex-wrap items-center px-2">
                        <SortDate state={listShow} setState={setListShow}/>
                    </div>


                    )
                    }
        </div>
    )
}

type LastProjectCardProps = {
    title: string;
    mockup?: string;
    image?: string;
    alt: string;
    id: string;
    github: string;
    link: string;
    color?: string;
}

const LastProjectCard = ({mockup, image, alt, github, link, id,title, color}:LastProjectCardProps) => {

    const [ url ,setUrl ] = useState<string>(github);

    useEffect(() => {
        if(link){
            setUrl(link);
        }
        else{
            setUrl(github);
        }
    }, [github,link])

    return (
        <div className=" relative min-h-[60vh] w-full h-auto">
            <div className="h-full flex justify-end w-full">
                { mockup ? 
                    (
                        <video>
                            <source src={mockup} />
                        </video>
                    ) 
                    : 
                    (
                    image ?  
                        <Image src={image} alt={alt} width={320} height={452} quality={65} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out " />
                    :
                        <div className="bg-green-500 w-[90%] h-[452px]"/>
                    )
                }
            </div>
            <div className="w-auto absolute bottom-[-4%] gap-2 left-[-20px] flex flex-col justify-between">
                <div className="pl-2">
                    <div className="w-[70px] flex justify-center items-center ">
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-full h-auto ${color? color : "fill-secondary" }`}
                            >
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                            >
                            </path>
                        </svg>
                    </div>
                    <span className={` ${color? color: "text-secondary"} pl-[20px]`}>
                        Dernier projet:
                        <strong className={` ${color? color: "text-secondary"} text-lg `}> {title}</strong>
                    </span>
                </div>
                    <CTA>
                        <a href={url} className="text-background text-center w-full text-xl"> Voir projet</a>
                    </CTA>
            </div>
        </div>
    )
}