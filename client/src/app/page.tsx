import HandWave from './../components/about/HandWave';
import ConfirmModal from './../components/about/ConfirmModal';
import NavBar from "../components/header/Header";
import ExpertiseCard from "./../components/Expertises";
import { dataExpertise, dataIntro } from "./../lib/data";
import Image from "next/image";
import LastProjectCard from '@/components/project/LastProject';
import ListProjects from '@/components/project/ListProjects';
import Filter from '@/components/project/Filter';
import ListExperience from '@/components/experience/ListExperience';
import { FaBriefcase, FaTools } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";




export default function Home() {


  return (
    <>
      <NavBar/>
      
      <main className="max-w-[1440px] flex w-full flex-col items-center gap-5 md:px-32 px-4 overflow-hidden ">
        <section 
          id="about" 
          className='relative mb-0 md:max-w-[50rem] text-left  md:mb-28 text-[#08172E]'
        >
          <div className='flex flex-col justify-center mt-[90px] items-center w-full h-auto px-2 md:px-0' >
              <div className='relative'>
                  <div className=' size-40 rounded-full overflow-hidden border-accent border-2 md:size-80 ' >
                      <Image
                          src={dataIntro.image}
                          alt={`${dataIntro.prenom} ${dataIntro.nom}`}
                          width={192}
                          height={192}
                          quality={95}
                          priority
                          className= ' -translate-y-4 md:tranlate-y-0 md:w-full   '
                      />
                  </div>
                  <HandWave />
              </div>
              <div className='mt-10 '>
                  <h1 className="px-4 md:px-0 text-2xl font-bold !leading-[1.5] md:text-4xl text-center md:text-left " >
                          <span className='font-normal '>{`Salut, moi c'est `}</span>Pierre.<br/>
                          <span className='font-normal '>Je suis </span>Développeur Fullstack<br/>
                          <span className='font-normal'>{dataIntro.text}</span>
                  </h1>
                  <ConfirmModal />
              </div>
          </div>
        </section>
        <section id="skills" className=" md:pb-22 pb-14" >
          <div className="py-4 md:py-14 flex flex-col  items-center">
              <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4'>
                  <FaTools className='size-6 '/>
                <h3 className="text-3xl font-bold text-center  ">Expertise</h3>
              </div>
            <div>
              <div className="flex flex-wrap justify-center md:gap-[0px] mt-5 items-center sm:flex-col md:flex-row md:items-start ">
                {dataExpertise.map((item) => (
                  <ExpertiseCard
                    key={`expertiseCard-${item.id}`}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full md:max-w-[1100px] md:mb-22 mb-14 flex gap-8 md:gap-10 flex-col " >
            <div className="w-full pt-20 flex flex-col justify-center items-center lg:flex-row md:items-start ">
                <div className="flex flex-col justify-center items-center w-full p-4 text-center lg:text-left md:gap-4 lg:gap-5 lg:items-start md:pt-12 lg:w-[60%]">
                  <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4 md:gap-2'>
                      <GiGearHammer className='size-6 '/>
                    <h3 className="text-3xl font-bold text-center md:whitespace-break-spaces md:text-left">Mes Projets</h3>
                  </div>
                    <p className=" text-lg ">Lors de mon apprentissage de développement web chez <a className='font-semibold hover:underline underline-offset-2' href="https://openclassrooms.com/fr" id='Openclassrooms-link'>Openclassrooms</a> en <span className='font-semibold'>Intégrateur Web</span> </p>
                </div>
                <div className="w-full h-full flex flex-col items-end py-10 mb-[60px] ">
                    <LastProjectCard contrast="light" />
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                    <Filter />
                    <div className="flex flex-col gap-4 w-full items-center justify-start md:flex-row md:flex-wrap md:justify-center md:gap-4 my-8">
                        <ListProjects />
                    </div>
            </div>
        </section>
        <section id="experience" className="w-full justify-center flex " >
            <div className="flex flex-col justify-start gap-4 w-full items-center pt-22 md:mb-22 mb-12">
                <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4'>
                  <FaBriefcase className='size-6 '/>
                  <h3 className="text-3xl font-bold text-center  ">Expériences</h3>
                </div>
                <div className="flex flex-col gap-4 w-full md:max-w-[1100px] justify-center items-center">
                    <ListExperience />
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
