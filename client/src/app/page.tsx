import HandWave from './../components/about/HandWave';
import ConfirmModal from './../components/about/ConfirmModal';
import Expériences from "../components/experience/Experiences";
import NavBar from "../components/header/Header";
import ExpertiseCard from "./../components/Expertises";
import { dataExpertise, dataIntro } from "./../lib/data";
import Image from "next/image";
import LastProjectCard from '@/components/project/LastProject';
import ListProjects from '@/components/project/ListProjects';
import Filter from '@/components/project/Filter';

export default function Home() {


  return (
    <>
      <NavBar/>
      <main className="max-w-[1440px] flex w-full flex-col items-center gap-5 md:px-32 px-8 overflow-hidden min-w-[320px]">
        <section 
          id="about" 
          className='relative mb-0 max-w-[50rem] text-left  md:mb-28 text-[#08172E]'

        >
          <div className='flex flex-col justify-center mt-[90px] items-center w-full h-auto px-2' >
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
                  <h1 className="px-4 text-2xl font-bold !leading-[1.5] md:text-4xl text-left md:text-center " >
                          <span className='font-normal md:'>{`Salut, moi c'est `}</span>Pierre.<br/>
                          <span className='font-normal '>Je suis </span>Développeur Fullstack<br/>
                          <span className='font-normal'>{dataIntro.text}</span>
                  </h1>
                  <ConfirmModal />
              </div>
          </div>
        </section>
        <section id="skills" className=" md:pb-22 pb-14" >
          <div className="py-14 flex flex-col  items-center">
            <div className=" text-center ">
              <h3 className="my-10 font-semibold text-4xl ">Expertises</h3>
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
            <div className="w-full pt-20 flex flex-col justify-center items-center md:flex-row md:items-start md:max-h-[40%] ">
                <div className="flex flex-col justify-center items-center w-full p-4 text-center md:text-left md:gap-5 md:items-start md:pt-12 md:w-[60%]">
                    <h3 className=" text-primary py-2 font-bold text-4xl whitespace-nowrap font-roboto ">
                       Mes Projets
                    </h3>
                    <p className=" text-lg "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo iusto nam sunt obcaecati aliquid mollitia. Incidunt amet id corporis a ullam repellendus obcaecati maiores. Soluta placeat ipsam unde nemo!</p>
                </div>
                <div className="w-full h-full flex flex-col items-end py-10 mb-[60px] ">
                    <LastProjectCard contrast="dark" />
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
        <Expériences />
      </main>
    </>
  );
}
