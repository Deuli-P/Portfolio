'use client'  

import { useContext, useState, useEffect, createContext } from "react";

type filterType = string | undefined;


type FilterContextType = {
    listFiltered: [];
    setListFiltered: (listFiltered: []) => void;
    listGet: [];
    setListGet: (listGet: []) => void;
    listShow: [];
    setListShow: (listShow: []) => void;
    filterActive: boolean,
    setFilterActive:()=> void;
    support: filterType,
    setSupport:(support: filterType) => void,
    mission: filterType,
    setMission:(mission: filterType) => void,
    technos: filterType,
    setTechnos:(technos: filterType) => void,
}

type FilterContextProviderProps = {
    children: React.ReactNode;
  };

export interface ProjectType {
    _id: string;
    name: string;
    support:string;
    cover: {
        image: string;
        alt: string;
    };
    description: string;
    github: string;
    tags: {
        mission: string;
        strategie: string;
        client: string;
        designer?:string;
    };
    job:string;
    technologies: string[];
    mockup: {
        image: string;
        alt: string;
    };
    pictures: [
        {
            image: Array<string>;
            alt: string;
        }
    ]
}


const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({children}: FilterContextProviderProps) => {

    // Filtres actif ou pas

    // Liste Fetch depuis l'API
    const [ listGet , setListGet ] = useState([])

    // Liste à afficher 
        // Si filtre non vide alors on affiche la liste filtrée
    const[ listShow , setListShow ] = useState<[]>([]);

    const[ filterActive, setFilterActive ] =useState<boolean>(false)

    // Techno 
    const [technos, setTechnos ] = useState<filterType>(undefined)


    // Support
    const [support, setSupport ] = useState<filterType>(undefined)


    // Mission 
    const [ mission, setMission ] = useState<filterType>(undefined)

    useEffect(()=>{
        if(technos || support || mission ){
            setFilterActive(true)
        }
        else{
            setFilterActive(false)
        }
    },[mission, technos,support])

    useState(() => {
        if(listGet){
             if (filterActive){
                const listFiltered = listGet.filter((item: ProjectType) => {
                    if(mission && support && technos){
                        return item.tags.mission === mission && item.tags.client === support && item.technologies.includes(technos)
                    }
                    if(mission && support){
                        return item.tags.mission === mission && item.tags.client === support
                    }
                    if(mission && technos){
                        return item.tags.mission === mission && item.technologies.includes(technos)
                    }
                    if(support && technos){
                        return item.tags.client === support && item.technologies.includes(technos)
                    }
                    if(mission){
                        return item.tags.mission === mission
                    }
                    if(support){
                        return item.tags.client === support
                    }
                    if(technos){
                        return item.technologies.includes(technos)
                    }
                })
                setListShow(listFiltered)
            }
            else{
                setListShow(listGet)
            }
        }
    },[listGet]);



    const values ={
        filterActive,
        setFilterActive,
        listGet,
        setListGet,
        listShow,
        setListShow,
        support,
        setSupport,
        mission,
        setMission,
        technos,
        setTechnos


    } 

    return(
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if(context === undefined){
        throw new Error('useFilterContext must be used within a FilterProvider')
    }
    return context;
}