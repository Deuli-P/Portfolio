'use client';
import { useSectionInView } from "@/lib/hooks";
import ListExperience from './ListExperience';
import { Suspense } from "react";
import Loading from '../../app/loading';


const Expériences =() => {

    const { ref } = useSectionInView("Experiences", 0.5);

    return(
        <section id="experience" className="w-full justify-center flex " ref={ref}>
            <div className="flex flex-col justify-start gap-4 w-full items-center pt-22 md:mb-22 mb-12">
                <h3 className="text-3xl font-bold text-center mb-4 ">Expériences</h3>
                <div className="flex flex-col gap-4 w-full md:max-w-[1100px] justify-center items-center">
                    <Suspense fallback={<Loading />}>
                        <ListExperience />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Expériences;

