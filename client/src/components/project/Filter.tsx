'use client';

import { useState } from 'react'
import Dropdown from './Dropdown';
import { technologies, support, mission } from '@/lib/data';

const Filter = () => {

    const[ isOpen, setIsOpen ] = useState<boolean>(false);


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
        <div className="flex z-20 flex-col md:flex-row justify-center items-center w-full h-full ">

            <div 
                onClick={()=>{setIsOpen(!isOpen)}}
                className={`flex items-center h-10 cursor-pointer justify-center py-1 px-[10px] rounded-full duration-300 z-40  ${ !isOpen? "bg-secondary text-primary translate-y-32 md:translate-y-0" : "bg-primary text-background translate-y-0 "}`}
                >
                <span className={`text-center text-lg`}>
                    Filtrer
                </span>
            </div>
            <div className={`flex flex-col w-full ml-[2px] z-10 items-center mt-4 md:mt-0 gap-2 md:flex-row md:flex-nowrap sm:flex-wrap `}>
                {/* Technologie */}
                <Dropdown  name="Technologies" selected={selectedTechnos} show={isOpen} delay={150}  liste={technologies} type="technos"  handle={handleFilterTechnos}/>
                {/* Job */}
                <Dropdown  name="Mission" selected={selectedMission} show={isOpen} delay={300} liste={mission} type="mission"  handle={handleFilterMission}/>
                {/* Support */}
                <Dropdown  name="Support" selected={selectedSupport} show={isOpen} delay={450} liste={support} type="support"  handle={handleFilterSupport}/>
            </div>
        </div>
    )
}

export default Filter;
