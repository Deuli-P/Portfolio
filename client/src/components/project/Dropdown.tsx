'use client'

import { useRef, useState, useEffect } from "react";
import { useFilterContext } from "./../../context/filter-projets-context";
import { IoIosArrowRoundUp } from "react-icons/io";
import OptionDropdown from "./OptionDropdown";

type SelectProps = {
    name: string;
    liste: string[];
    show: boolean;
    delay: number;
    type: string;
    selected: string | null ;
    handle: (target:string | null)=>void
}


const Dropdown = ({ name, liste, show, delay, type, handle, selected}: SelectProps) => {

    const [ isOpen , setIsOpen ] = useState(false);


    // const { filterActive, mission, support, technos } = useFilterContext();

    const dropDownRef = useRef<HTMLInputElement>();
    const dropdownMenuRef = useRef<HTMLInputElement>();

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

    useEffect(()=>{
        window.addEventListener('click', (e: MouseEvent) => {
            if(!dropDownRef.current?.contains(e.target as Node) && !dropdownMenuRef.current?.contains(e.target as Node)){
                setIsOpen(false)
            }
        })
    },[dropDownRef])


    return(
        <div className={`relative duration-300 ${show ? 'translate-x-0 z-10 opacity-100' : '-translate-x-12 opacity-0'} `}> 
            <button 
                onClick={() => {setIsOpen(!isOpen)}} 
                className={` gap-2 py-[6px] px-[12px] flex flex-row justify-center items-center rounded-full z-10 ${ !isSelected ? "bg-secondary text-primary" : 'bg-primary text-secondary'}`}
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
                    <ul ref={dropdownMenuRef} className="absolute top-12 w-auto bg-secondary shadow-lg z-50 rounded-lg p-2 flex gap-1 flex-col justify-start items-start scroll-primary overflow-y-scroll h-[150px] md:flex-row md:flex-wrap md:w-[300%] md:px-4 md:py-2 ">
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