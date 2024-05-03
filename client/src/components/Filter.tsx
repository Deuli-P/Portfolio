'use client'

import { useEffect, useRef, useState } from "react";
import { useFilterContext } from "./../app/context/filter-projets-context";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { list } from "postcss";
///////////////////  SELECT //////////////////////

type OptionProps = {
    tech: string;
    idx: number
}

type SelectProps = {
    name: string;
    liste: string[];
    type: string;
    selected: string | null ;
    handle: (target:string | null)=>void
}


export const Dropdown = ({name,liste,type,handle, selected}: SelectProps) => {

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

type OptionDropdownProps = {
    tech: string;
    state: string;
    handle: (tech:string)=>void
}


const OptionDropdown =({tech, state,handle}: OptionDropdownProps) => {

    return(
        <li 
            onClick={()=> handle(tech)}
            className={`${state === tech ? "bg-primary text-background" : "bg-background text-primary"} px-4 py-2 rounded-full whitespace-nowrap`}
        >
            {tech}
        </li>
    )
}


// export const SortDate = () => {

//     const {filter, setFilter, listGet, setListFiltered } = useFilterContext();

//     const typeSort = filter.sort;

//     const handleChange = () => {
//         if( typeSort === null ){
//             setFilter({...filter, sort:"asc"})

//         }
//         else if(typeSort === "asc"){
//             setFilter({...filter, sort:"desc"})
//         }
//         else {
//             setFilter({...filter, sort:null})
//         }

//     }



//     return(
//         <button onClick={() => {handleChange()}} className={`px-4 py-2 rounded-full flex items-center gap-2 ${typeSort === null ? "bg-secondary text-primary" : 'bg-primary text-secondary'} `}>
//             <span className={`${typeSort === null ? "translate-x-[10px]" :"translate-x-0"} transition-all duration-100 ease-linear`}>Trier par date</span>
//             <div className=" flex items-center justify-center size-[15px]">
//                 {typeSort  === null ? 
//                     null
//                 :
//                 typeSort === 'asc'? 
//                     (
//                         <RiSortAsc className="size-full"/>
//                     )
//                     :
//                     (
//                         <RiSortDesc className="size-full"/>
//                     )
                
//             }
//             </div>
//         </button>
//     )

// }


