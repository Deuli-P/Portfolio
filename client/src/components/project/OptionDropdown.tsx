'use client'


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

export default OptionDropdown;


