import clsx from "clsx";
import { useActiveSectionContext } from "../../../context/active-section-context";

type BurgerType = {
    isOpen: boolean;
    HandleOpen: ()=>void;
}

const Burger = ({isOpen, HandleOpen}: BurgerType) => {

    const { activeSection } = useActiveSectionContext();

    return (
        <button 
            className={` bg-[#e5e7eb] relative rounded-md size-full flex flex-col justify-center shadow-lg items-center p-[1.5rem] z-50`}
            onClick={()=>HandleOpen()}
        >
            {/*  .burger-menu-tabs => globals.css */}
                <div className={` burger-menu-tabs rounded-full ${isOpen? "-rotate-45 translate-y-0": "-translate-y-2" }`}/>
                <div className={` burger-menu-tabs rounded-full ${isOpen? "opacity-0": null}`}/>
                <div className={` burger-menu-tabs rounded-full ${isOpen? "rotate-45 translate-y-0": "translate-y-2"}`}/>
        </button>
    );
};

export default Burger;