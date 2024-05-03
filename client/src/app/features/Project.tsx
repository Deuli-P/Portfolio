'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { useFilterContext, ProjectType } from "../context/filter-projets-context";
import { Dropdown } from "@/components/Filter";

const Project = () => {

    const { ref } = useSectionInView("Projects", 0.5);

    const { listShow, setListShow, setListGet, listGet } = useFilterContext();
    

    // Fetch Data
        const getData= async()=> {
            try {
                const api = await fetch("http://localhost:3002/v01/projects/all")
                const apiJson = await api.json();
                setListGet(apiJson);
                console.log("ApiJson:",apiJson);
                console.log("ListGet:",listGet);
                setListShow(apiJson);
            } catch (error) {
                console.log("Error Project Fetching:", error);
            }
        };
    
        useEffect(() => {
                getData()
        },[]);

    return(
        <section id="projects" className="w-full md:max-w-[1100px] md:mb-22 mb-14 flex gap-8 md:gap-10 flex-col " ref={ref}>
            <div className="w-full pt-20 flex flex-col justify-center items-center md:flex-row md:items-start md:max-h-[40%] ">
                <div className="flex flex-col justify-center items-center w-full p-4 text-center md:text-left md:gap-5 md:items-start md:pt-12 md:w-[60%]">
                    <h3 className=" text-primary py-2 font-bold text-4xl whitespace-nowrap font-roboto ">
                       Mes Projets
                    </h3>
                    <p className=" text-lg "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo iusto nam sunt obcaecati aliquid mollitia. Incidunt amet id corporis a ullam repellendus obcaecati maiores. Soluta placeat ipsam unde nemo!</p>
                </div>
                <div className="w-full h-full flex flex-col items-end py-10 mb-[60px] ">
                    <LastProjectCard image="https://images.unsplash.com/photo-1713999212351-78f54ee46d9e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title='Test Titre' alt='Quai de metro rouge' link='https://pexels.com' id="DEDKEER1222à" github='https://github.com/Deuli-P/' contrast="dark"/>
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                    <Filter />
                    <div className="flex flex-col gap-4 w-full items-center justify-start md:flex-row md:flex-wrap md:justify-center md:gap-4 my-8">
                        { listShow.length > 0 ?
                            (
                                listShow.map((item: ProjectType, idx) => {
                                    return(
                                        <Card key={idx} title={item.name} id={item._id} type={item.support} alt={item.cover.alt} image={item.cover.image}/>
                                    )
                                })
                            )
                            :
                            (
                                <>
                                    <FakeCard />
                                    <FakeCard />
                                    <FakeCard />
                                    <FakeCard />
                                    <FakeCard />
                                </>
                            )
                    }
                    </div>
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
        <Link href={`/project/${id}`} rel="noopener noreferrer" target="_blank" className=" group w-full h-[365px] md:h-[452px] max-w-[350px] bg-red-400 article-height mb-4 overflow-hidden rounded-lg cursor-pointer shadow-2xl">
            <article className=" flex flex-col items-center sm:justify-between h-full shadow-lg bg-primary">
                <div className="w-full h-[360px] overflow-hidden ">
                    <div className="w-full h-full relative scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out">
                        <Image 
                            src={image} 
                            alt={alt} 
                            quality={65} 
                            fill
                            objectFit="cover"
                            />
                    </div>
                </div>
                <div className=" text-background p-4 w-full h-[20%]">
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

    const { setMission, setSupport, setTechnos } = useFilterContext();

  

    const technologiesCategories: string[] = [
        "CSS",
        "SASS",
        "HTML",
        "NextJS",
        "ViteJS",
        "NodeJs",
        "ReactJS",
        "MongoDB",
        "Javascript",
        "Typescript",
        "TailwindCSS",
    ];

    const supportCategories: string[] = [
        "Dev Mobile",
        "Dev Web",
        "Audit",
    ];


    const missionCategories: string[] = [ 
        "Fullstack",
        "Frontend",
        "Backend",
        "Layout",
        "SEO",
    ];


    const [selectedMission, setSelectedMission] = useState<string | null>(null);
    const [selectedSupport, setSelectedSupport] = useState<string | null>(null);
    const [selectedTechnos, setSelectedTechnos] = useState<string | null>(null);

    // Handlers pour mettre à jour les états sélectionnés
    const handleFilterMission = (text: string | null) => {
        setSelectedMission(text);
    };

    const handleFilterSupport = (text: string | null) => {
        setSelectedSupport(text);
    };

    const handleFilterTechnos = (text: string | null) => {
        setSelectedTechnos(text);
    };





    return(
        <div className="flex flex-row justify-start w-full h-full ">

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
                    <div className="flex flex-row w-full ml-[2px] items-center gap-[5px] md:flex-nowrap sm:flex-wrap">
                        {/* Technologie */}
                        <Dropdown  name="Technologies" selected={selectedTechnos}  liste={technologiesCategories} type="technos"  handle={handleFilterTechnos}/>
                        {/* Job */}
                        <Dropdown  name="Mission" selected={selectedMission}  liste={missionCategories} type="mission"  handle={handleFilterMission}/>
                        {/* Support */}
                        <Dropdown  name="Support" selected={selectedSupport}  liste={supportCategories} type="support"  handle={handleFilterSupport}/>
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
    contrast?: string;
}

const LastProjectCard = ({mockup, image, alt, github, link, id,title, contrast}:LastProjectCardProps) => {

    const [ url ,setUrl ] = useState<string>(github);
    const [ color, setColor ] = useState<'primary' | "secondary" | "background">("secondary");

    useEffect(() => {
        if(link){
            setUrl(link);
        }
        else{
            setUrl(github);
        }
    }, [github,link])

    useEffect(()=> {
        if(contrast === 'dark'){
            setColor('primary');
        }
        else if (contrast === "light"){
            setColor('background');
        }
        else{
            setColor('secondary');
        }
    })
    return (
        <div className=" relative min-h-[60vh] md:min-h-[40vh] w-full h-full">
            <div className="h-full flex justify-end w-full md:max-h-[1200px]">
                { mockup ? 
                    (
                        <video>
                            <source src={mockup} />
                        </video>
                    ) 
                    : 
                    (
                    image ?  
                        <Image src={image} alt={alt} width={320} height={452} quality={65} className="w-[90%] h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out md:w-full" />
                    :
                        <div className="bg-green-500 w-[90%] h-[452px]"/>
                    )
                }
            </div>
            <div className="w-auto absolute bottom-[-4%] gap-2 left-[-20px] flex flex-col justify-between md:left-[-70px]">
                <div className="pl-2">
                    <div className="w-[70px] flex justify-center items-center ">
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-full h-auto ${contrast === "dark" ? "fill-primary" : contrast === "light"? "fill-background" : "fill-secondary"} stroke-secondary stroke-[1px] `}
                            >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                            >
                            </path>
                        </svg>
                    </div>
                    <span className={` ${color? color: "text-secondary"} pl-[20px] text-xl  stroke-text`}>
                        Dernier projet:
                        <strong className={` ${color? color: "text-secondary"} text-2xl drop-shadow-sm `}> {title}</strong>
                    </span>
                </div>
                    <CTA>
                        <a href={url} className="text-background text-center w-full text-xl">Voir projet</a>
                    </CTA>
            </div>
        </div>
    )
}

const FakeCard= ()=> {
    return(
        <article className=" max-w-[350px] max-h-[452px] min-h-[360px] min-w-[300px] rounded-lg bg-secondary">

        </article>
    )
}