'use client'
import CTA from "./../CTA";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectType } from "./../../lib/types";
import getProjects from "./getProjects";



const LastProjectCard = (contrast: any) => {

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
        <div className=" relative min-h-[60vh] md:min-h-[40vh] w-full h-full">
            <div className="h-full flex justify-end w-full md:max-h-[1200px]">
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
            <div className="w-auto absolute bottom-[-4%] gap-2 lg:left-[-10rem] lg:w-[500px] left-[-20px] flex flex-col justify-between md:left-[-70px]">
                <div className="pl-8">
                    <div className="w-[70px] flex justify-center items-center ">
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-full h-auto ${contrast === "dark" ? "fill-[#551E5B]" : contrast === "light"? "fill-background" : "fill-[#551E5B]"} `}
                            >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                            >
                            </path>
                        </svg>
                    </div>
                        <span className={` text-xl relative text-[#82735C]  `}>
                            Dernier projet:
                            <strong className={` text-2xl drop-shadow-sm ${contrast === "light" ? "fill-[#551E5B]" : contrast === "dark"? "fill-background" : "fill-[#551E5B]"} `} > {item.name}</strong>
                        </span>
                </div>
                <div className=" w-full flex justify-center">
                    <CTA>
                        <a href={item.link} className="text-background text-center  w-full min-w-[200px] text-xl" id='link project'>Voir projet</a>
                    </CTA>
                </div>
                    
            </div>
        </div>
    )
}


export default LastProjectCard;