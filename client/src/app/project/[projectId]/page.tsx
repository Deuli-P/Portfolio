'use client'

import { Suspense, useEffect, useState } from "react";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { CircleLoader } from "@/components/Loader";
import getProject from "./ProjectData";



const Page = (params:string) => {

    

    const [ isLoading, setIsLoading ]= useState<boolean>(true)
    const [ dataProject, setDataProject ] = useState([]);

   
    const dataGet = async() => {
        const item = await getProject(id)
        setDataProject(item)
        setIsLoading(false)
    }

    useEffect(()=> {
        console.log("[Project Page] id:",id);
    },[id])

    useEffect(()=>{
        console.log("[Project Page] dataProject:",dataProject);
    },[dataProject])

    useEffect(()=> {
        if(isLoading){
            dataGet()
            if(dataProject){
                setIsLoading(false)
            }
        }
    },[isLoading, dataProject, dataGet])

    return(
        <>
        {isLoading?
            (
                <main id="main-projet" className=" w-screen h-screen flex justify-center items-center">
                    <div className=' size-[250px] bg-primary flex justify-center items-center shadow-md rounded-md'>
                        <CircleLoader />
                    </div>
                </main>
            )
            : !dataProject ?
            (
                <main id="main-projet-error" className=" w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl front-primary">
                        <h2 className="font-bold">
                            {`404, la page n'existe pas.`}
                        </h2>
                        <CTA>
                            <Link href="/"> {`Retourner a l'accueil`}</Link>
                        </CTA>
                    </div>
                </main>
            )
            :
            (
                <main id="main-projet" className="">
                    <section className="">
                        <div className="">
                            <i className="fa-solid fa-arrow-left" onClick={()=>history.back()}/>
                        </div>
                        <div className="projetPage_title-title">
                            <span>{`//`} { dataProject.support}</span>
                            <h1>{ dataProject.name}</h1>
                        </div>
                    </section>
                    <section className="projetPage_chemin">
                        <span 
                            onClick={()=> router.back()}
                        >
                            Home {'>'}
                        </span>
                        <span>Portfolio {'>'} </span>
                        <span>{dataProject.name}</span>
                    </section>
                    <section className="projetPage_description-container">
                        <div className="projetPage_description-text">
                            <p>
                                <Suspense fallback={<div className=" bg-secondary rounded-sm w-full h-full "/>}>
                                    {dataProject.description}
                                </Suspense>
                            </p>
                        </div>
                        <div className="projetPage_description-designer">
                            <div className="projetPage_description_designer_fiche-container">
                                <Suspense fallback={<p>Loading tags...</p>}>
                                    {/* {dataProject.tags.map((item, idx) => (  
                                        <div 
                                            className="projetPage_description_designer-fiche "
                                            key={idx}
                                        >
                                            <div className="projetPage_description_designer_fiche-content">
                                                <span>{item[0]}</span>
                                                <p>{item.alt}</p>
                                            </div>
                                        </div>
                                    ))} */}
                                </Suspense>
                            </div>
                                {/*  Quand hover fleche s'affiche et avance vers le droite */}
                            <div className="projetPage_description_designer-fiche projetPage_description_designer-openProjet">
                                <CTA>
                                    <a
                                        href={dataProject.link} 
                                        className=""
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        >
                                        Ouvrir projet
                                    </a>
                                </CTA>
                            </div>
                        </div>
                    </section>
                    <section className="">
                        {/* {renderReseau}  */}
                        {/* <div className="">
                            <Suspense flassback={<div className=" bg-secondary h-full w-full rounded-sm "/>}>
                                <Image src={pictures.presentation.image} alt={pictures.presentation.alt} width={200} height={200} />
                            </Suspense>
                        </div> */}
                        {/* Pour chaque  */}
                            {/* {pictures?.projet.map((item, idx) => (
                                <div className="" key={`item_img`+idx}>
                                    {item.map((image, idx) => (
                                        <Image 
                                            src={image.image} 
                                            alt={image.alt}
                                            key={`image_img`+idx}
                                            fill
                                        />
                                    ))}
                                </div>
                            ))} */}
                    </section>
                </main>
                )
            }
        </>
    )
}

export default Page;