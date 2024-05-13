'use client'
import { useEffect, useState } from "react";
import CTA from "@/components/CTA";
import Image from "next/image";
import { CircleLoader } from "@/components/Loader";
import getProject from "./ProjectData";
import { useRouter } from 'next/navigation';
import { BiArrowToLeft } from "react-icons/bi";
import { ProjectType } from "@/lib/types";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


type paramsType = {
    params: {
        projectId: string
    }

}


const Page = ({params}:paramsType ) => {

    const  id = params.projectId;

    const [ project, setProject ] = useState<ProjectType>()
    const router = useRouter();

    const handleBack = ()=> {
        console.log("[PAGE] handleBack");
        router.push('/')
    }

    useEffect(() => {
        console.log("[PAGE] id:",id);
        
        const fetchProject = async () => {
          if (id) {
            const api = await getProject(id);
            console.log("[PAGE] Api recup:",api);
            
            setProject(api);
          }
        };
      
        fetchProject();
      }, [id]);

      const renderTag = (tag: string,text:string) => (
        <div 
            className=" w-[210px]"
        >
            <div className="border-t-[2px] text-left pt-4 mr-4 mb-4" >
                <span className=" font-extrabold ">{tag}</span>
                <p className="pl-2">{text}</p>
            </div>
        </div>
      )


    const RenderReseau =(url, name)=>(
            <div className="projetPage_media_RS">
                <a  target={`_blank`}
                    href={url}
                    className="projetPage_media_RS-a"
                >
                        { 
                            name === "instagram" ?
                                <FaInstagram className={`projetPage_media_RS-i`} /> 
                            : 
                            name === "facebook" ?
                                <FaFacebookF className={`projetPage_media_RS-i`} />
                            :
                            name === "linkedin" ?
                                <FaLinkedinIn className={`projetPage_media_RS-i`} />
                            :
                                null
                        }
                </a>
        </div>
    );
 
    return(
        <>
            <nav className='w-full flex justify-between items-center p-4 md:p-6 md:fixed'>
                <div 
                    className='size-10 bg-secondary cursor-pointer shadow-md rounded-full flex items-center justify-center group  hover:bg-primary  transition-all duration-200'
                    onClick={handleBack}
                >
                    <BiArrowToLeft className='size-6 text-primary group-hover:text-secondary transition-all duration-300 delay-50'/>
                </div>
                <CTA>
                    <a href='#contact' className='flex gap-2 items-center '  >
                        <span className='text-background'>Contact moi</span>
                    </a>
                </CTA> 
            </nav>
            { project ?
            (
                <main id="main-projet" className=" bg-background text-primary w-full px-8 mb-12">
                    <section className="flex flex-col justify-center items-star py-4 ">
                        <span>{`//`} { project.support}</span>
                        <h1 className="ml-2 font-black text-4xl text-foregroundAccent">{ project.name}</h1>
                    </section>
                    <section className="py-4 font-semibold text-lg">
                        <span 
                            onClick={handleBack}
                            className=" cursor-pointer hover:underline underline-offset-2"
                        >
                            Home 
                        </span>
                            {' >'}
                        <span>Portfolio {'>'} </span>
                        <span>{project.name}</span>
                    </section>
                    <section className="flex flex-col gap-4 py-6">
                        <div className="">
                            <p>
                                {project.description}
                            </p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <div className="flex flex-row flex-wrap w-full">
                                {renderTag("Client",project.tags.client)}
                                {renderTag("Mission",project.tags.mission)}
                                {renderTag("Stratégie",project.tags.strategie)}
                                {project.tags.designer ?renderTag("Designer",project.tags.designer) : null }
                            </div>
                            <div className=" w-full flex justify-center">
                                <CTA>
                                    <a
                                        href={project.link} 
                                        className=" w-full max-w-[300px] text-center"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        Ouvrir projet
                                    </a>
                                </CTA>
                            </div>
                        </div>
                    </section>
                    <section className=" w-full flex flex-col gap-4 relative ">
                        <div className="absolute top-4 left-4" >
                            { project.reseau ? 
                                (
                                    project.reseau.map((item, idx) =>{
                                        return (
                                            <RenderReseau url={item.url} name={item.name} key={`reseau_${idx}`} />
                                        )})
                                )
                                : 
                                   null
                            } 
                        </div>
                        <div className=" w-full h-full ">
                            { project.mockup.type === "video" ?
                            (
                                <video loop muted autoPlay preload="false" controlsList="nodownload">
                                    <source src={project.mockup.url} type="video/mp4" />
                                </video>
                            )
                            :
                                <Image src={project.mockup.url} alt={project.mockup.alt} width={1200} height={800} />
                            }
                        </div>
                            {/* Pour chaque object dans pictures on recup "alt" puis pour chaque element dans "image" on creer une image
                                    pictures:[
                                        {
                                            images:[
                                                "string",
                                                "string",
                                                "string",
                                            ];
                                            alt: string;
                                        }
                                    ]
                            */}
                                {project.pictures.map((items) => (
                                    <div className=" w-full h-full flex flex-col " key={`pack_img`+items.alt}>
                                        {items.images.map((image: string, idx) => (
                                            <Image 
                                                src={image} 
                                                alt={items.alt}
                                                key={`image_img`+idx}
                                                width={1200}
                                                height={800}
                                            />
                                        ))}
                                    </div>
                                ))}
                    </section>
                </main>
            )
        :
        <main className="w-screen h-screen flex justify-center items-center">

            <div className='size-20 rounded-full bg-primary flex items-center justify-center'>
                <CircleLoader/>
            </div>
        </main>
        }
        </>
    )
}

export default Page;