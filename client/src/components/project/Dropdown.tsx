'use client'

import { useRef, useState } from "react";
import { useFilterContext } from "./../../context/filter-projets-context";
import { IoIosArrowRoundUp } from "react-icons/io";
import OptionDropdown from "./OptionDropdown";

type SelectProps = {
    name: string;
    liste: string[];
    type: string;
    selected: string | null ;
    handle: (target:string | null)=>void
}


const Dropdown = ({name,liste,type,handle, selected}: SelectProps) => {

    const [ isOpen , setIsOpen ] = useState(false);


    const { filterActive, mission, support, technos } = useFilterContext();

    const dropDownRef = useRef<HTMLInputElement>();
    const dropdownMenuRef = useRef();

    // Utilisez l'état local approprié pour suivre la sélection
    const isSelected = selected ;

    // Handler pour mettre à jour la sélection
    const handleSelected = (target: string) => {
        if (isSelected === target) {
            // Si déjà sélectionné, désélectionnez
            handle(null);
        } else {
            // Sinon, mettez à jour la sélection
            handle(target);
        }
    };


    window.addEventListener('click', (e) => {
        if(!dropDownRef.current?.contains(e.target) && !dropdownMenuRef.current?.contains(e.target)){
            setIsOpen(false)
        }
    })


    return(
        <div className="relative"> 
            <button 
                onClick={() => {setIsOpen(!isOpen)}} 
                className={` gap-2 py-[6px] px-[12px] flex flex-row justify-center items-center rounded-full ${ !isSelected ? "bg-secondary text-primary" : 'bg-primary text-secondary'}`}
                ref={dropDownRef}
                >
                    <div className="relative justify-center items-center flex w-full ">
                        <span className={`${isSelected  ? "opacity-0" : "opacity-100" }`}>{name}</span>
                        <span className={`absolute whitespace-nowrap `}>{ selected}</span>
                    </div>
                <div className="flex items-center justify-center size-[20px] relative">
                        <IoIosArrowRoundUp className={`size-full transition-all duration-300 absolute ease-out ${isOpen? "rotate-180" : "rotate-0" }`}/>
                </div>
            </button>
            {!isOpen ? 
                    null
                :
                (
                    <ul ref={dropdownMenuRef} className="absolute top-12 w-auto bg-secondary shadow-lg z-[2] rounded-lg p-2 flex gap-1 flex-col justify-start items-start scroll-primary overflow-y-scroll h-[150px] md:flex-row md:flex-wrap md:w-[300%] md:px-4 md:py-2 ">
                       {liste.map((tech, index) => {
                            return(
                                <OptionDropdown key={index} tech={tech} handle={handleSelected} state={isSelected}/>
                            )
                        })}
                    </ul>
                )
        }
        </div>
    )
}

export default Dropdown;

