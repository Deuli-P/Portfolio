import CTA from "@/components/CTA";
import HeaderMobile from "@/components/header/mobile/headerMobile";
import HeaderDesktop from "@/components/header/headerDesktop";
import React from "react";


const NavBar = () => {

    return (
        <header className=" sticky z-10 top-6 w-full flex flex-row-reverse items-center md:justify-center">
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )

}

export default NavBar;