'use client'

import { useState } from "react";
import { useFilterContext } from "./../app/context/filter-projets-context";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
///////////////////  SELECT //////////////////////

type SelectProps = {
    children: React.ReactNode;
    values: string[];
    name: string;
}


const SelectContainer = ({children,values,name}:SelectProps)=> {



    return ( 
        <select > 
           
        </select>
    )
}

type OptionProps = {
    children: React.ReactNode;
    value: string;
}


const OptionSelect = ({value, children}:OptionProps) => {

    return(
        <option value={value} >
            {children}
        </option>
    )
}



export const SortDate = (setState, state) => {

    const { filter, setFilter, listFiltered } = useFilterContext();

    const [ typeSort , setTypeSort ] = useState< "asc" | "desc" | null >(null);

    const sortAsc = () => {
        setFilter("asc")

    }

    const sortDesc = ()=> {
        setFilter("desc")
    }

    const handleChange = () => {
        if( typeSort === null ){
            setTypeSort("asc")

        }
        else if(typeSort === "asc"){
            setTypeSort("desc")
        }
        else {
            setTypeSort(null)
        }

    }



    return(
        <button onClick={() => {handleChange()}} className={`px-4 py-2 rounded-full flex items-center gap-2 ${typeSort === null ? "bg-secondary text-primary" : 'bg-primary text-secondary'} `}>
            <span className={`${typeSort === null ? "translate-x-[10px]" :"translate-x-0"} transition-all duration-100 ease-linear`}>Trier par date</span>
            <div className=" flex items-center justify-center size-[15px]">
                { typeSort === null ? 
                    null
                :
                typeSort === 'asc'? 
                    (
                        <RiSortAsc className="size-full"/>
                    )
                    :
                    (
                        <RiSortDesc className="size-full"/>
                    )
                
            }
            </div>
        </button>
    )

}