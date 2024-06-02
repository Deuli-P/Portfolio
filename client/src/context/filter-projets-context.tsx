'use client'  

import { useContext, useState, useEffect, createContext, Dispatch, SetStateAction } from "react";

type filterType = string | undefined;


type FilterContextType = {
    listFiltered: ProjectType[];
    setListFiltered: Dispatch<SetStateAction<ProjectType[]>>;
    listGet: ProjectType[];
    setListGet: Dispatch<SetStateAction<ProjectType[]>>;
    listShow: ProjectType[];
    setListShow: Dispatch<SetStateAction<ProjectType[]>>;
    filterActive: boolean;
    setFilterActive: Dispatch<SetStateAction<boolean>>;
    support: filterType;
    setSupport: Dispatch<SetStateAction<filterType>>;
    mission: filterType;
    setMission: Dispatch<SetStateAction<filterType>>;
    technos: filterType;
    setTechnos: Dispatch<SetStateAction<filterType>>;
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

    // Liste filtrée
    const [listFiltered, setListFiltered] = useState<ProjectType[]>([]);

    // Liste Fetch depuis l'API
    const [ listGet , setListGet ] = useState<ProjectType[]>([])

    // Liste à afficher 
        // Si filtre non vide alors on affiche la liste filtrée
    const[ listShow , setListShow ] = useState<ProjectType[]>([]);

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

    useEffect(() => {
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
    },[listGet, filterActive, mission, support, technos]);



    const values: FilterContextType = {
        filterActive,
        setFilterActive,
        listGet,
        setListGet,
        listFiltered,
        setListFiltered,
        listShow,
        setListShow,
        support,
        setSupport,
        mission,
        setMission,
        technos,
        setTechnos
    };

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