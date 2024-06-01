'use client'
import { useEffect, useState } from "react";
import CTAPrimary from "@/components/CTA/CTAPrimary";
import Image from "next/image";
import { CircleLoader } from "@/components/Loader";
import getProject from "./ProjectData";
import { useRouter } from 'next/navigation';
import { ProjectType } from "@/lib/types";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronLeft} from "react-icons/fa";
import TelechargerCV from "@/components/header/DLCV";
import Technologies from "@/components/Technologies";


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
        router.push('/')
    }

    useEffect(() => {
        
        const fetchProject = async () => {
          if (id) {
            const api = await getProject(id);
            
            setProject(api);
          }
        };
      
        fetchProject();
      }, [id]);

      const renderTag = (tag: string,text:string) => (
        <div 
            className=" xl:w-[210px] w-[105px]"
        >
            <div className="border-t-[2px] text-left pt-4 mr-4 mb-4" >
                <span className=" font-extrabold ">{tag}</span>
                <p className="pl-2 text-[0.625rem] xl:text-[1rem]">{text}</p>
            </div>
        </div>
      )


    interface RenderReseauProps {
    url: string;
    name: string;
    }

    const RenderReseau: React.FC<RenderReseauProps> = ({ url, name })=>(
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
            <nav className='w-full flex justify-between items-center py-6 px-2 md:px-6 xl:max-w-[1100px]'>
                <div 
                    className='size-10 cursor-pointer lg:hidden flex items-center justify-center group  hover:scale-80  transition-all duration-200'
                    onClick={handleBack}
                >
                    <FaChevronLeft className='size-6 text-primary group-hover:-translate-x-2 transition-all duration-300 delay-50'/>
                </div>
                <TelechargerCV />
                <div className="cursor-pointer hidden lg:block">
                    <span className=" hover:underline duration-300 transition-all delay-100 underline-offset-[8px] font-semibold text-lg">Accueil</span>
                </div>
                <CTAPrimary>
                    <a href='#contact' className='flex gap-2 items-center '  >
                        <span className='text-background'>Contact moi</span>
                    </a>
                </CTAPrimary> 
            </nav>
            { project ?
            (
                <main id="main-projet" className=" bg-background text-primary w-full px-4 mb-12 xl:max-w-[1250px] flex flex-col justify-center">
                    <section className="flex flex-col justify-center items-star gap-6 pb-4 pt-8 ">
                        <span>{`//`} { project.support}</span>
                        <h1 className="ml-2 font-black text-4xl text-foregroundAccent">{ project.name}</h1>
                        <div className="font-semibold">
                            <span 
                                onClick={handleBack}
                                className=" cursor-pointer underline underline-offset-2"
                                >
                                Home 
                            </span>
                                {' >'}
                            <span>Portfolio {'>'} </span>
                            <span>{project.name}</span>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 py-6 lg:flex-row lg:justify-around ">
                        <p className="lg:w-[40%] xl:max-w-[550px] ">
                            {project.description}
                        </p>
                        <div className="flex flex-row flex-wrap justify-center xl:justify-between w-full lg:max-w-[420px]">
                            {renderTag("Client",project.tags.client)}
                            {renderTag("Mission",project.tags.mission)}
                            {renderTag("Stratégie",project.tags.strategie)}
                            {project.tags.designer ?renderTag("Designer",project.tags.designer) : null }
                        </div>
                    </section>
                    <section className=" w-full flex flex-col lg:flex-row lg:gap-20 lg:w-full items-center justify-center gap-4">
                        <div className="flex flex-row flex-wrap xl:w-[50%]">
                            {project.technologies.map((tech,index)=> {
                                return(
                                    <Technologies key={index} item={tech}/>
                                )
                            })}
                        </div>
                        <div className="w-full flex justify-center lg:w-[50%]">
                            <div className="w-[200px] md:w-full md:max-w-[250px]">
                                <CTAPrimary>
                                    <a
                                        href={project.link} 
                                        className=" w-full max-w-[300px] text-center"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        Ouvrir projet
                                    </a>
                                </CTAPrimary>
                            </div>
                        </div>
                    </section>
                    <section className=" w-full flex flex-col gap-4 mt-8 relative ">
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
                                    <source 
                                        src={project.mockup.url} 
                                        type="video/mp4" 
                                    />
                                </video>
                            )
                            :
                                <Image 
                                    src={project.mockup.url} 
                                    alt={project.mockup.alt} 
                                    width={1200} height={800} 
                                />
                            }
                        </div>
                                {project.pictures.map((items,idx) => (
                                    <div className=" w-full h-full flex flex-col " key={`pack_img_`+idx}>
                                        {items.images.map((image: string, idx) => (
                                            <Image 
                                                src={image} 
                                                alt={items.alt}
                                                key={`image_img_`+idx}
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