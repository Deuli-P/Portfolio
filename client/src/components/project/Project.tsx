'use client'

import { useSectionInView } from "@/lib/hooks";
import Filter from "./Filter";
import LastProjectCard from "./LastProject";
import ListProjects from "./ListProjects";
import { Suspense } from "react";

const Project = () => {

    const { ref } = useSectionInView("Projects", 0.5);

    
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
                    <LastProjectCard contrast="dark" />
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                    <Filter />
                    <div className="flex flex-col gap-4 w-full items-center justify-start md:flex-row md:flex-wrap md:justify-center md:gap-4 my-8">
                        <Suspense fallback={<div>Loading liste...</div>}>
                            <ListProjects />
                        </Suspense>
                    </div>
            </div>
        </section>
    )
}

export default Project;





