import HTMLIcon from "./../../assets/SVG/HTML-icon.svg";
import CSSIcon from "./../../assets/SVG/CSS-icon.svg";
import mongoDBIcon from "./../../assets/SVG/MongoDB-icon.svg";
import tailwindsCSSIcon from "./../../assets/SVG/Tailwindss-icon.svg";
import figmaIcon from "./../../assets/SVG/Figma-icon.svg";
import photoshopIcon from "./../../assets/SVG/Photoshop-icon.svg";
import nodejsIcon from "./../../assets/SVG/NodeJS-icon.svg";
import javascriptIcon from "./../../assets/SVG/Javacript-icon.svg";
import Image from "next/image";

const techno = [
  { icon: HTMLIcon, name: "HTML"},
  { icon: CSSIcon, name: "CSS"},
  { icon: mongoDBIcon, name: "MongoDB"},
  { icon: tailwindsCSSIcon, name: "TailwindCSS"},
  { icon: figmaIcon, name: "Figma"},
  { icon: photoshopIcon, name: "Photoshop"},
  { icon: nodejsIcon, name: "NodeJS"},
  { icon: javascriptIcon, name: "JavaScript"}
];

const SlideShow = () => {
  return (
    <>
        <ul className="relative flex flex-row flex-wrap gap-4 justify-center items-center  md:w-full md:max-w-[1100px] px-4 w-[320px] md:flex-nowrap">
        {techno.map((item,index) => {

            return (
            <li key={`icon ${item.name}`} className={` flex flex-row gap-2 items-center justify-start md:text-[1.25rem]  `}>
                <div className="flex items-center justify-center size-4" >
                    <Image src={item.icon} width={16} height={16} alt={`icon ${item.name}`} quality={65}  loading="lazy"/>
                </div>
                <p>{item.name}</p>
            </li>
            );
        })} 
        </ul>
    </>
  );
}

export default SlideShow;