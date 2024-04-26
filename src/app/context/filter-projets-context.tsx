import { useContext, useState, useEffect, createContext } from "react";

    

type FilterContextType = {
    filter: string;
    setFilter: (filter: string) => void;
    listFiltered: [];
    setListFiltered: (list: []) => void;
}

type FilterContextProviderProps = {
    children: React.ReactNode;
  };

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({children}: FilterContextProviderProps) => {

    const [filter, setFilter] = useState<string>("");

    const [ listShow , setListShow ] = useState()

    const [ listFiltered , setListFiltered ] = useState<[]>([]);

    // Sort by date 
    

    // select by categories

    // select by technos

    // select by type of job


    const values ={
        filter,
        setFilter,
        listFiltered,
        setListFiltered
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