'use client'
import CTAPrimary from "./../CTA/CTAPrimary";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectType } from "./../../lib/types";
import getProjects from "./getProjects";
import Arrow from "./../../assets/SVG/Arrow-icon.svg"



const LastProjectCard = () => {

    const [item, setItem ] = useState({
        name: "Titre",
        _id: undefined,
        mockup: {
            type: "image",
            url: "/images/placeholder-loading.webp",
            alt: "Loading placeholder - Gray background"
        },
        link: undefined
    });
    
    useEffect(() => {
    const fetchProject = async () => {
        const response = await getProjects();
        const listSort = response.sort((a:ProjectType, b:ProjectType) => Date.parse(a.createAt) - Date.parse(b.createAt));
        setItem(listSort[listSort.length - 1]);
    };
    fetchProject();
    }, []);



    return (
        <>
            <div className="h-[full] w-full object-cover ">
                { item.mockup.type === "image" ? 
                    (
                    <Image 
                        src={item.mockup.url} 
                        alt={item.mockup.alt} 
                        width={320} 
                        height={452} 
                        quality={65} 
                        className="w-[90%] h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out md:w-full" 
                    />
                    )
                    : 
                    (
                        <video loop muted autoPlay preload="false" controlsList="nodownload">
                            <source src={item.mockup.url} type="video/mp4"/>
                        </video>
                    ) 
                }
            </div>
            <div className="xl:absolute lg:bottom-0 lg:-left-[50%]">

                <div className="relative flex flex-col gap-4 justify-center">
                    <div className="absolute top-0 right-4 w-[70px] h-[70px] flex justify-center items-center -scale-x-100 xl:scale-x-100 xl:rotate-90">
                        <Image src={Arrow} alt='Icon fleche' width={64} height={64} />
                    </div>
                    <span className={` text-xl relative text-primary whitespace-nowrap pt-16 `}>
                        Dernier projet:
                        <strong className={` text-2xl text-foregroundAccent`}> {item.name}</strong>
                    </span>
                    <div className=" w-full flex justify-center">
                        <CTAPrimary>
                            <a href={item.link} className=" text-center  w-full min-w-[200px] text-xl" id='link project'>Voir projet</a>
                        </CTAPrimary>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LastProjectCard;