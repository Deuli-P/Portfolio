import React from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
// div
// animation titre
// titre
// decoration surlignement ::before
// animation bloc
// blocs
// top du bloc
// icon
// titre
// animation +/-
// animation bloc bottom
// decoration h3 --- h3
// texte

type Expertise = {
  title: string;
  text: string;
  icon: string;
  subtitle: string;
};

const data = [
  {
    id: 1,
    title: "Frontend",
    text: "Passionné de développement web depuis longtemps, je suis à la recherche de nouveaux challenges en Frontend dans l'optique de faire des sites beau et dynamique. J'optimise les sites pour qu'ils soient performants, responsive et bien référencés.",
    icon: "frontend",
    subtitle: "ReactJs, Tailwind, Framer",
  },
  {
    id: 2,
    title: "Backend",
    text: "Developper un site sécurisé et performant est ma priorité, pouvoir se connecter, ajouter ou supprimer des données.",
    icon: "backend",
    subtitle: "Express, MongoDB, NodeJs",
  },
  {
    id: 3,
    title: "UI/UX",
    text: "Je suis passionné par le design et l'expérience utilisateur. J'aime créer des interfaces simples et intuitives. J'utilise Figma pour mes maquettes.",
    icon: "ui/ux",
    subtitle: "Figma, Photoshop",
  },
  // {
  //     id:"4",
  //     title:"Mobile",
  //     text:"Je suis spécialisé en React Native.",
  //     icon:"mobile",
  //     subtitle:"React Native, Expo"
  // },
];

const Card = ({ title, subtitle, icon, text }: Expertise) => {
  return (
    <article className="p-4 bg-primary text-secondary border-1 border-accent first:border-first-sm md:first:border-first-md md:last:border-last-md last:border-last-sm shadow-lg backdrop-blur-2xl relative w-[350px] md:h-[300px] sm:max-w-[90%]">
      {/* TOP */}
      <div className="flex justify-start gap-2 items-center h-auto w-full">
        {/* ICON */}
        <div className="size-14 text-zinc-50 ">
          {icon === "frontend" ? (
            <FaReact className="size-full" />
          ) : icon === "backend" ? (
            <FaNodeJs className=" size-full " />
          ) : icon === "ui/ux" ? (
            <MdDesignServices className=" size-full " />
          ) : icon === "mobile" ? (
            <CiMobile3 className=" size-full " />
          ) : (
            <AiFillPicture className=" size-full" />
          )}
        </div>
        <h4 className=" flex flex-col text-[1.1rem] w-auto pl-5 h-auto justify-center py-2 items-start font-roboto">
          <span
            className="font-bold relative z-0 text-[1.375rem]
                         after:-skew-y-3 after:bottom-[15%] after:absolute after:-z-[1] after:h-[0.3em] after:w-[90%] after:bg-accent after:left-[17%]"
          >
            {title}
          </span>
          {subtitle}
        </h4>
      </div>
      {/* TOP */}
      {/* BOTTOM */}
      {/* Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className=" py-5 px-[15px] flex flex-row justify-between h-auto"
      >
        {/* description container */}
        <div
          className="relative flex flex-row-reverse items-center
                        after:opacity-30
                        after:h-[65%]
                        after:bottom-0 
                        after:left-[17px] 
                        after:border-solid 
                        after:border-[1px] 
                        after:border-zinc-50 
                        after:content-default"
        >
          {/* descripiton content */}
          <div
            className="pl-[35px] text-[12px] flex flex-col items-start
                            before:ml-[-50px]
                            before:content-['<h3>'] 
                            before:mb-[5px] 
                            before:opacity-30 
                            after:ml-[-50px]
                            after:mt-[5px]
                            after:content-['</h3>'] 
                            after:opacity-30
                            "
          >
            <p className=" text-left px-2 ">{text}</p>
          </div>
        </div>
      </motion.div>
      {/* BOTTOM */}
    </article>
  );
};

const Expertises = () => {

  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="skills" ref={ref} className="my-14 min-h-screen" >
      <div className="py-14 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className=" text-center "
        >
          <h3 className="my-10 font-semibold text-4xl ">Expertises</h3>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="flex flex-wrap justify-center md:gap-[0px] mt-5 items-center sm:gap-[5px] sm:flex-col md:flex-row md:items-start">
            {data.map((item) => (
              <Card
                key={`expertiseCard-${item.id}`}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertises;
