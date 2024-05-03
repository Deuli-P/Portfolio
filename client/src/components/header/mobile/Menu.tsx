type MenuProps = {
    isOpen: boolean;
    HandleNavBar: () => void;
}

const Menu = ({isOpen, HandleNavBar}: MenuProps) => {

    return(
        <div className="p-[1.5rem] relative">
            <div
                className=" absolute top-[49%] right-[1.5rem] size-6 cursor-pointer translate-x-0 -translate-y-[-50%]"
            >
                <span className=" block absolute top-[50%] mt-[-1px] w-full h-[4px] rounded-[4px] transition-all ease-linear duration-300"/>
                <span className=" block absolute top-[50%] mt-[-1px] w-full h-[4px] rounded-[4px] transition-all ease-linear duration-300"/>
                <span className=" block absolute top-[50%] mt-[-1px] w-full h-[4px] rounded-[4px] transition-all ease-linear duration-300"/>
            </div>
        </div>
    )
}

export default Menu;