import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';
import { FaLinkedin ,FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import CTA from '@/components/CTA';

// image
// Presentation
// CTA Contact
// Bouton téléchargement du CV
// linkedin
// github

// Creer une page pour lancer le telechargement du CV a l'ouverture


const data = {
    prenom: "Pierre",
    nom: "Antoniutti",
    profession: "Développeur Fullstack",
    text: "spécialisé en React et NodeJs. J'aime créer des sites optimisé et esthétiquement beau, ainsi que des applications web. J'habite sur Paris et je recherche une entreprise pour une alternance. N'hésitez pas à me contacter pour plus d'informations.",
    gituhb:"https://github.com/Deuli-P",
    linkedin:"https://www.linkedin.com/in/pierre-antoniutti/",
    cv:"http://pierre-antoniutti.fr/v01/Pierre-Antoniutti-CV.pdf",
    image: "/pierre-antoniutti-crete-400.webp"
}


const Intro=() =>{

    const { ref } = useSectionInView("About", 0.5);

  return (
    <section id="about" ref={ref} className=' mb-0 max-w-[50rem] text-left  md:mb-28 text-[#08172E]'>
        <div 
            className='flex flex-col justify-center mt-[90px] items-center w-full h-auto px-2'
        >
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.4}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{duration: 0.4, delay: 0.3, type: "tween"}}
                    className=' size-40 rounded-full overflow-hidden border-orange-300 border-2 md:size-80 '
                >
                    <Image
                        src={data.image}
                        alt={`${data.prenom} ${data.nom}`}
                        width={192}
                        height={192}
                        quality={95}
                        priority
                        className= ' -translate-y-4 md:tranlate-y-0 md:w-full   '
                    />
                </motion.div>
                <motion.span 
                    className="absolute bottom-0 right-2 text-4xl"
                    initial={{ opacity: 0, scale: 0, rotate: -70 }}
                    animate={{ opacity: 1, scale: 1, rotate:0}}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        type: "spring",
                        stiffness: 175,
                    }}
                >
                👋
                </motion.span>
            </div>
            <div className='mt-10 '>
                <motion.h1
                    className="px-4 text-2xl font-bold !leading-[1.5] md:text-4xl text-left md:text-center "
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{duration: 0.4, delay: 0.9, type:"just"}}
                    >
                        <span className='font-normal md:'>{`Salut, moi c'est `}</span>Pierre.<br/>
                        <span className='font-normal '>Je suis </span>Développeur Fullstack<br/>
                        <span className='font-normal'>{data.text}</span>
                </motion.h1>

                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 1,
                    type:"spring"
                }}
                className='flex flex-row gap-4 w-full justify-center mt-8'
                >
                    <div
                        className=' size-16 border-2 border-[#e5e7eb]/75 rounded-lg shadow-xl bg-[#08172E] text-white font-bold text-[1.5rem] hover:bg-[#C2C1C1]/75 hover:text-[#08172E] transition-colors duration-300 ease-in-out flex justify-center items-center  '
                    >
                        <a href="https://linkedin.com/in/pierre-antoniutti/" target='_blank ' className='size-[75%]'>
                            <FaLinkedin className=" size-full "/>
                        </a>
                    </div>
                    <CTA>
                        <a href="https://google.fr" target="_blank" className=' flex flex-row flex-nowrap items-center justify-center gap-3 w-full'>
                            <span className='text-sm whitespace-nowrap text-ellipsis font-semibold'> Télécharger CV </span>
                            <FaDownload className=" size-8 p-[2px]"/>
                        </a>
                    </CTA>
                    <div
                        className=' size-16 border-2 border-[#e5e7eb]/75 rounded-full shadow-xl bg-[#08172E] text-white font-bold text-[1.5rem] hover:bg-[#C2C1C1]/75 hover:text-[#08172E] transition-colors duration-300 ease-in-out flex justify-center items-center  '
                    >
                        <a href="https://github.com/Deuli-P" target='_blank ' className='size-[80%]'>
                            <FaGithub className=" size-full "/>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Intro;