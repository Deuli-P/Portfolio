import { links } from "./../../lib/data";
import Element from './../../components/header/Element';
import CTA from "./../CTA";

const HeaderDesktop = () => {
    return ( 
      <nav className={`w-full h-[60px] justify-end items-center relative hidden md:flex md:justify-center transition-all duration-300 gap-6 `}>
        <div className="hidden md:block shadow-lg shadow-ring rounded-full px-4 py-2 bg-[#e5e7eb]">
            <ul className="flex justify-center items-center gap-5">
              {links.map((link, index) => {
                  return(
                    <Element key={index} hash={link.hash} name={link.name}/>
                  )
              })}
            </ul>
        </div>
       
      </nav>
    )
  }

export default HeaderDesktop;