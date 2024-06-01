type BurgerType = {
    isOpen: boolean;
    HandleOpen: ()=>void;
}

const Burger = ({isOpen, HandleOpen}: BurgerType) => {


    return (
        <button 
            className={` bg-[#d7d2d2b8] relative rounded-md size-full flex flex-col justify-center shadow-lg items-center p-[1.5rem] z-50`}
            onClick={()=>HandleOpen()}
            name="burger-btn"
        >
            {/*  .burger-menu-tabs => globals.css */}
                <div className={` burger-menu-tabs rounded-full ${isOpen? "-rotate-45 translate-y-0": "-translate-y-2" }`}/>
                <div className={` burger-menu-tabs rounded-full ${isOpen? "opacity-0": null}`}/>
                <div className={` burger-menu-tabs rounded-full ${isOpen? "rotate-45 translate-y-0": "translate-y-2"}`}/>
        </button>
    );
};

export default Burger;