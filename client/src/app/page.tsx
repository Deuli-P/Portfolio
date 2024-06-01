import HandWave from './../components/about/HandWave';
import DonwloadCV from './../components/about/ConfirmModal';
import NavBar from "../components/header/Header";
import ExpertiseCard from "./../components/Expertises";
import { dataExpertise, dataIntro } from "./../lib/data";
import Image from "next/image";
import LastProjectCard from '@/components/project/LastProject';
import ListProjects from '@/components/project/ListProjects';
import Filter from '@/components/project/Filter';
import ListExperience from '@/components/experience/ListExperience';
import { BsArrowDown } from 'react-icons/bs';
import { PiPhone } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import SlideShow from '@/components/about/slideShow';
import DrawAbout from '@/components/about/Draws';




export default function Home() {


  return (
    <>
      <NavBar/>

      <main className="max-w-[1440px] flex w-full flex-col items-center gap-5 xl:px-32 md:px-6 px-4 overflow-hidden pb-12 xl:pb-20" >
        {/* Hero Section */}
        <section className='relative flex items-center h-screen mb-0 md:max-w-[50rem] min-h-[700px] md:mb-28 text-primary' >
          {/* Hero Auto Layout */}
          <div className='flex flex-col justify-center gap-6 mt-[90px] items-center w-full h-auto px-2 md:px-0' >
            {/*  Titre */}
              <div className='mt-10'>
                  <h1 className="px-4 md:px-0 text-[1.25rem] md:text-4xl font-bold !leading-[1.5] text-center " >
                          <span className='font-normal '>{`Salut, moi c'est `}</span>Pierre.<br/>
                          <span className='font-normal '>Je suis </span>Développeur Web Fullstack<br/>
                  </h1>
              </div>
            {/* Vidéo/ Image */}
              <div className='relative'>
                  <div className=' h-full max-w-64 rounded-t-full overflow-hidden border-accent border-2 md:w-60 md:h-80' >
                      <Image
                          src={dataIntro.image}
                          alt={`${dataIntro.prenom} ${dataIntro.nom}`}
                          width={252}
                          height={400}
                          quality={95}
                          priority
                          className='w-full h-full'
                      />
                  </div>
                  <HandWave />
              </div>
            {/* Button */}
                  <DonwloadCV />
                {/* En savoir plus */}
              <span className=' flex flex-row items-center'>
                <BsArrowDown />
                Ne soyez pas timide
              </span>
          </div>
        </section>
        <section id="about" className='mb-12'>
          <div className='relative w-full xl:w-[960px]'>
              <p className='text-[10px] bg-primary rounded-md p-4 text-background w-full  '>
                Bonjour,<br/>
                {`J'ai 28 ans et je vis sur Paris,`}<br/>
                Je recherche une <span className="font-bold text-[14px] text-accent"> Alternance Développeur Web</span> en Île-de-France pour 12 mois minimum.
                <br/>
                <br/>
                {`J'ai passé 5 ans dans le cinéma d'animation à faire des séries d'animation et publicités pour de grandes entreprise comme Rolex, Netflix et FranceTV. J'y ai développé des compétentces en envirronement 3D, la suite Adobe, le travail d'équipe et une capacité a m'adapter rapidement.`}
                <br/>
                <br/>
                {`J'ai entamé une reconversion en développement web après des années à mis interesser en faisant une formation chez `}<span className="font-bold text-[14px]">Openclassrooms</span> en Intégrateur web.
                <br/>
                <br/>
                Je souhaite améliorer mon bagage de compétence en continuant avec une formation Fullstack.
              </p>
              <div className=' -translate-y-4 flex justify-start md:justify-end '>
                <DrawAbout />
              </div>
            <div className=' bg-primary rounded-md p-4 text-background max-w-[370px]'>
              <span className='text-[0.875rem] uppercase'>
                <strong className='text-[0.9rem]'>
                Contact école: 
                </strong>
                {` `}Jérémy Rocamora
              </span>
              <div className='flex flex-row gap-4 items-center'>
                <PiPhone />
                {`+33 (0)6 59 91 98 55`}
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <MdEmail />
                <a href='mailto:j.rocamora@3wacademy.fr' id="email-contact-ecole" className='underline underline-offset-2'>
                  j.rocamora@3wacademy.fr
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className=" md:pb-22 pb-14 flex items-center " >
          <div className="py-4 md:py-14 flex flex-col justify-between items-center gap- md:min-h-[1000px]] ">
            {/* Titre */}
              <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={20}
                    fill="none"
                  >
                    <circle cx={10.647} cy={10} r={9.5} fill="#08172E" stroke="#fff" />
                    <path
                      fill="#fff"
                      d="M15.992 12.759h-3.62v2.413h.689l.172.518c.714.208 1.13.23 1.897 0l.172-.518h.69V12.76Z"
                    />
                    <path
                      fill="#fff"
                      d="m5.647 13.104-.172-6.38h.517v-.517c-.69 0-.795-1.685-.517-2.241.345-.69 1.551-.863 2.241-.345.599.449.69 1.724-.345 2.586v.517l.517-.172 2.931-3.449h1.035v.863h1.552v1.206h-1.207v1.725h-.862l-.345 2.069h1.207v.862h1.207v-.862h.69v-2.07l1.034.173V5.862h-1.035c.059 0-.056-1.208 0-1.207 3.951.09 3.621 3.29 3.621 4.31 0 1.38-1.724 1.552-1.724 3.104h-3.62c0-1.38-1.38-1.38-1.38-3.103H8.06v1.551c2.758 1.207 2.758 5 2.758 5.518-.69.172-.69.172-1.379-.173-.172-2.586-.517-3.276-2.241-3.965l-.173 1.896L4.44 16.38c-.69-.345-.69-.345-.862-1.207l2.07-2.069Z"
                    />
                    <path fill="#08172E" d="M10.302 7.759H8.06l1.034-1.207h1.207v1.207Z" />
                </svg>
                <h2 className=" text-3xl font-bold text-center ">Expertise</h2>
              </div>
            <div>
              {/* Expertises */}
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
              </div >
              {/* Liste de technololiges */}
            </div>
            <div className='w-full h-full flex justify-center mt-6' >
              <SlideShow />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full md:max-w-[1100px] md:mb-22 mb-14 flex gap-8 md:gap-10 flex-col " >
            <div className="w-full pt-20 flex flex-col justify-center items-center lg:flex-row md:items-start ">
                <div className="flex flex-col justify-center items-center w-full p-4 text-center lg:text-left md:gap-4 lg:gap-5 lg:items-start md:pt-10 lg:w-[60%]">
                  <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4 md:gap-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={22}
                    fill="none"
                  >
                    <path
                      stroke="#F9F6F4"
                      strokeLinecap="round"
                      d="M9.941 5.235c-1.736.139-3.236.53-4 2.118-.764 1.588-1.059 3.5.47 5.882 1.53 2.383.413 4.236 1.177 4.236h2.588m-2.823 1.882h5.176M8.53 21h2.824m-8-11.53H1m4.235-4.705L3.588 3.118m6.353 0V1m4.941 3.765 1.412-1.412m.47 6.118h1.883m-8.47-2.353c.428 0 .82.062 1.176.179m-1.177 7.82c.45 0 .9-.08 1.324-.235m-.147-7.585.706-1.356m-.706 1.356c1.08.353 1.825 1.203 2.233 2.308m0 0c.197.533.315 1.124.355 1.748 0 .518-.091.99-.253 1.412m-.102-3.16L15.118 9m-1.43 3.765c-.4 1.036-1.228 1.767-2.188 2.117m2.188-2.117.715.235.715.235M11.5 14.882l.559 1.412"
                    />
                  </svg>
                    <h2 className="text-3xl font-bold text-center md:whitespace-break-spaces md:text-left">Mes Projets</h2>
                  </div>
                    <p className=" text-lg ">Lors de mon apprentissage de développement web chez <a className='font-semibold hover:underline underline-offset-2' href="https://openclassrooms.com/fr" id='Openclassrooms-link'>Openclassrooms</a> en <span className='font-semibold'>Intégrateur Web</span> {`j'ai appris a coder de manière autonome. `}<br/><br/>Depuis, à travers de nombreux projet différent je me perfectionne en méthodologie, connaissance et organisation.</p>
                </div>
                <div className="w-full h-full flex flex-col items-end py-10 md:py-0 relative ">
                    <LastProjectCard />
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                    <Filter />
                    <div className="flex flex-col gap-4 w-full z-1 items-center justify-start md:flex-row md:flex-wrap lg:justify-center lg:gap-4 my-8">
                        <ListProjects />
                    </div>
            </div>
        </section>
        <section id="experience" className="w-full justify-center flex " >
            <div className="flex flex-col justify-start gap-4 w-full items-center pt-22 md:mb-22 mb-12">
                <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={20}
                    fill="none"
                  >
                    <path
                      fill="#F9F6F4"
                      d="M.647 18.75v-7h9.5v2.5c0 .75.25.75 1.5.75h4.5c1.5 0 1.5 0 1.5-.75v-2.5h9.5v7c0 1.25-.75 1.25-1.5 1.25l-23.5-.25c-.5 0-1.5 0-1.5-1Z"
                    />
                    <path fill="#D9DBDC" d="M12.147 11.75h3.5V12a1.75 1.75 0 1 1-3.5 0v-.25Z" />
                    <path
                      fill="#F9F6F4"
                      d="M.897 5.25v4h26.25v-4c0-1.5-.5-2-1.75-2h-4.75c0-1.5-.75-3.25-2.5-3.25h-8c-1.5 0-2.5 1.75-2.5 3.25h-5c-1.25 0-1.75.75-1.75 2Z"
                    />
                    <path
                      fill="#08172E"
                      d="M18.647 3.25h-9.5c0-1 .5-1.75 1.5-1.75h6.5c1 0 1.5.75 1.5 1.75Z"
                    />
                  </svg>
                  <h2 className="text-3xl font-bold text-center ">Expériences</h2>
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