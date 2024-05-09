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
                        <Dropdown  name="Technologies" selected={selectedTechnos}  liste={technologies} type="technos"  handle={handleFilterTechnos}/>
                        {/* Job */}
                        <Dropdown  name="Mission" selected={selectedMission}  liste={mission} type="mission"  handle={handleFilterMission}/>
                        {/* Support */}
                        <Dropdown  name="Support" selected={selectedSupport}  liste={support} type="support"  handle={handleFilterSupport}/>
                    </div>
                )
            }
        </div>
    )
}

export default Filter;
