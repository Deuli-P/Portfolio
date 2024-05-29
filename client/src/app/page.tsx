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
import { BsArrowDown } from 'react-icons/bs';
import { PiPhone } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import SlideShow from '@/components/about/slideShow';




export default function Home() {


  return (
    <>
      <NavBar/>

      <main className="max-w-[1440px] flex w-full flex-col items-center gap-5 md:px-32 px-4 overflow-hidden pb-12 xl:pb-20" >
        {/* Hero Section */}
        <section className='relative flex items-center h-screen mb-0 md:max-w-[50rem] min-h-[700px] md:mb-28 text-primary' >
          {/* Hero Auto Layout */}
          <div className='flex flex-col justify-center gap-4 mt-[90px] items-center w-full h-auto px-2 md:px-0' >
            {/*  Titre */}
              <div className='mt-10'>
                  <h1 className="px-4 md:px-0 text-[1.25rem] md:text-4xl font-bold !leading-[1.5] text-center " >
                          <span className='font-normal '>{`Salut, moi c'est `}</span>Pierre.<br/>
                          <span className='font-normal '>Je suis </span>Développeur Web Fullstack<br/>
                  </h1>
              </div>
            {/* Vidéo/ Image */}
              <div className='relative'>
                  <div className=' h-full max-w-64 rounded-t-full  overflow-hidden border-accent border-2 md:size-80 ' >
                      <Image
                          src={dataIntro.image}
                          alt={`${dataIntro.prenom} ${dataIntro.nom}`}
                          width={192}
                          height={192}
                          quality={95}
                          priority
                          className='md:w-full'
                      />
                  </div>
                  <HandWave />
              </div>
            {/* Button */}
                  <ConfirmModal />
                {/* En savoir plus */}
              <span className=' flex flex-row items-center'>
                <BsArrowDown />
                Ne soyez pas timide
              </span>
          </div>
        </section>
        <section id="about" className='mb-12'>
          <div className='relative'>
            <div>
              <p className='text-[10px] bg-primary rounded-md p-4 text-background'>
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
              <div className=' -translate-y-4 '>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={267}
                  height={204}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#08172E"
                      d="M266.501 10.707V-2.49H13.862S1.097-3.564-1.03-4.1c.531 5.905.69 28.032 12.233 36.505 11.7 8.59 27.725 1.608 34.856-2.115 7.132-3.722 14.41-7.827 22.415-8.343 8.004-.517 16.985 3.824 18.883 11.73 1.65 6.879-2.545 13.977-8.01 18.38-4.277 3.445-9.297 5.74-14.145 8.321a78.42 78.42 0 0 0-3.979 2.243c-3.327 2.026-6.316 4.398-9.158 7.077-2.984 2.809-5.783 5.934-8.11 9.322a56.56 56.56 0 0 0-4.843 8.546 40.147 40.147 0 0 0-1.142 2.749c-2.225 5.947-3.092 12.612-.249 18.165 2.836 5.537 8.98 8.816 15.113 9.271 3.548.215 6.868-.16 10.24-1.302 11.683-3.883 27.835-16.78 34.11-27.608 6.273-10.828 14.904-39.502 24.017-47.504 9.113-8.004 20.532-14.054 32.585-13.962 12.053.09 15.151 77.35 18.574 89.074 4.99-8.723 14.267-59.818 18.616-71.385 19.585-39.97 64.356-31.997 75.525-34.358Z"
                    />
                    <path
                      fill="#6C63FF"
                      d="M147.09 22.196a1.334 1.334 0 0 1-1.324-1.344c0-.742.593-1.343 1.324-1.343.732 0 1.325.601 1.325 1.343s-.593 1.344-1.325 1.344Z"
                    />
                    <path
                      fill="#FF6584"
                      d="M173.343 61.242c-1.13 0-2.047-.93-2.047-2.077 0-1.147.917-2.077 2.047-2.077 1.131 0 2.048.93 2.048 2.077 0 1.147-.917 2.077-2.048 2.077ZM19.937 52.18a.762.762 0 0 1-.756-.767c0-.424.338-.767.756-.767s.757.343.757.767a.762.762 0 0 1-.757.768ZM24.192 15.675a.762.762 0 0 1-.756-.767c0-.424.338-.768.756-.768s.757.344.757.768a.762.762 0 0 1-.757.767ZM64.644 63.46a11.173 11.173 0 0 0-1.012-2.078c-1.346.715-3.277 1.737-6.696 4.196-2.85 2.315-3.57 2.734-6.412 5.414a8.06 8.06 0 0 0 4.69 3.125 7.965 7.965 0 0 0 5.563-.732 8.145 8.145 0 0 0 3.747-4.236c.71-1.82.752-3.84.12-5.69Z"
                    />
                    <path
                      fill="#F0F0F0"
                      d="M172.774 49.57a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.785c.427 0 .773.351.773.785a.779.779 0 0 1-.773.785ZM59.855 30.907a.78.78 0 0 1-.773-.785.78.78 0 0 1 .773-.785.78.78 0 0 1 .774.785.78.78 0 0 1-.774.785ZM73.141 14.636a.78.78 0 0 1-.773-.784.78.78 0 0 1 .773-.785.78.78 0 0 1 .774.784.78.78 0 0 1-.774.785ZM25.273 33.975a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.785.78.78 0 0 1 .774.785.78.78 0 0 1-.774.785ZM92.289 36.11a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.785.78.78 0 0 1 .774.785.78.78 0 0 1-.774.785ZM74.243 165.265a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.785.78.78 0 0 1 .773.785.78.78 0 0 1-.773.785ZM79.524 75.836a.78.78 0 0 1-.774-.784.78.78 0 0 1 .774-.785.78.78 0 0 1 .774.785.78.78 0 0 1-.774.784ZM99.64 56.564a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.785c.427 0 .773.352.773.785a.779.779 0 0 1-.773.785Z"
                    />
                    <path
                      fill="#6C63FF"
                      d="M64.34 96.389a25.047 25.047 0 0 0-6.228-9.875c-.372-.361-.755-.71-1.148-1.047a24.64 24.64 0 0 0-13.795-5.855 56.561 56.561 0 0 0-4.842 8.546 40.014 40.014 0 0 0-1.142 2.749c-2.226 5.947-3.093 12.613-.25 18.165 2.837 5.538 8.98 8.817 15.113 9.271a27.462 27.462 0 0 0 10.474-1.404 25.396 25.396 0 0 0 3.19-12.135c.02-2.864-.444-5.71-1.372-8.415Z"
                    />
                    <path
                      fill="#E4E4E4"
                      d="M74.58 91.416c-1.243-3.633-5.891-5.771-13.092-6.024-1.441-.051-3.026.556-4.524.075-7.267-2.339-13.86-.81-19.243 4.079-.186.448-.366.902-.536 1.36.072-.027.144-.052.216-.077 7.273-2.561 14.492-4.056 20.711-4.315 1.15-.047 2.52-.721 3.338-.015 6.574 5.676 11.02 3.298 12.099 5.28 1.574 2.894-1.22 7.404-6.274 11.748-.5.43-1.02.855-1.562 1.277-.005.476-.02.95-.05 1.424a45.607 45.607 0 0 0 2.318-1.855c5.498-4.725 7.841-9.327 6.599-12.957Z"
                    />
                    <path
                      fill="#F0F0F0"
                      d="M46.017 115.841a.779.779 0 0 1-.773-.784.78.78 0 0 1 .773-.785.78.78 0 0 1 .774.785.779.779 0 0 1-.774.784ZM59.705 105.746a.779.779 0 0 1-.774-.784.78.78 0 0 1 .774-.785.78.78 0 0 1 .773.785.779.779 0 0 1-.773.784ZM49.233 107.879c-4.155 0-7.523-3.417-7.523-7.632 0-4.216 3.368-7.633 7.523-7.633 4.155 0 7.523 3.417 7.523 7.633 0 4.215-3.368 7.632-7.523 7.632Z"
                    />
                    <path
                      fill="#F0F0F0"
                      d="M161.648 68.367c-1.759.083-5.396.97-9.338 2.115-3.939 1.147-8.212 2.545-12.43 3.929-7.384 2.42-14.768 4.84-22.152 7.258-1.015.332-2.033.667-3.054 1.005-.39.519-.779 1.043-1.161 1.572a112.26 112.26 0 0 1 2.696-.93c3.837-1.265 7.167-2.1 10.891-3.25 5.731-1.77 11.777-4.094 17.641-6.258 5.863-2.167 12.59-4.498 16.907-5.442Z"
                      opacity={0.3}
                    />
                    <path
                      fill="#D9DBDC"
                      d="M19.609 53.022 3 80.994l15.672-28.529A.586.586 0 0 1 19 52.05a.565.565 0 0 1 .718.22.585.585 0 0 1-.109.752Z"
                      opacity={0.3}
                    />
                    <path
                      fill="#F0F0F0"
                      d="M44.239 83.055a.78.78 0 0 1-.774-.785.78.78 0 0 1 .774-.784.78.78 0 0 1 .774.784.78.78 0 0 1-.774.785Z"
                    />
                    <path
                      fill="#6C63FF"
                      d="M174.837 122.588c-2.601 0-4.709-2.139-4.709-4.777 0-2.638 2.108-4.777 4.709-4.777 2.6 0 4.708 2.139 4.708 4.777 0 2.638-2.108 4.777-4.708 4.777Z"
                    />
                    <path
                      fill="#B79197"
                      d="M177.626 115.188a3.342 3.342 0 0 0 1.291-.691c.375-.323.676-.726.881-1.179.205-.454.31-.948.306-1.448a3.452 3.452 0 0 0-.325-1.442l8.525-8.516-6.08-1.316-7.164 8.288a3.423 3.423 0 0 0-1.545 1.87 3.476 3.476 0 0 0 .068 2.438c.317.778.903 1.41 1.648 1.778a3.345 3.345 0 0 0 2.395.218Z"
                    />
                    <path
                      fill="#6C63FF"
                      d="m218.391 48.915-4.754 3.18-5.566 1.322s-4.414 32.005-6.583 33.925c-2.169 1.92-.341 2.102-.929 4.75-.588 2.648-1.948 8.065-1.948 8.065 13.212 8.309 25.016 9.323 35.086 1.366a2.435 2.435 0 0 0-.068-1.596 2.398 2.398 0 0 0-1.04-1.2c-1.702-1.074 1.991-5.278.597-6.12-1.394-.841 1.069-7.139 1.069-7.139l-.43-13.524 1.197-2.075-1.686-13.316-4.345-1.959-1.488-4.474-9.112-1.205Z"
                    />
                    <path
                      fill="#08172E"
                      d="m216.331 50.038-7.84 2.648s-8.673-.929-9.024 12.17c-.352 13.097 1.264 20.126 1.264 20.126s-18.04 36.805 1.502 25.935l5.711-22.813 5.885-35.827 2.502-2.24Z"
                    />
                    <path
                      fill="#08172E"
                      d="m208.468 78.995-4.067-.57s-.392 6.22-2.337 7.163c-1.946.943-1.29 1.098-1.519 2.096-.23.998 1.73 3.763.189 4.45-1.541.688-15.009 17.914-15.009 17.914l-7.945-7.464c.546-1.501 3.173-.279 3.338-1.871.208-2.406 4.367-8.979 5.252-9.822.885-.842.535-2.328.994-4.324.459-1.996.14-.145.905-3.472.764-3.326 11.126-20.276 11.486-23.347.361-3.071 4.579-4.88 4.579-4.88l3.279.776.855 23.351Z"
                    />
                    <path
                      fill="#B79197"
                      d="m242.804 189.606-4.787 1.275-7.125-18.123 7.064-1.882 4.848 18.73Z"
                    />
                    <path
                      fill="#08172E"
                      d="m244.283 194.626-14.718 3.921-.049-.188a6.086 6.086 0 0 1 .614-4.557 5.939 5.939 0 0 1 3.61-2.782h.001l2.153-2.785 5.551.733 1.285-.343 1.553 6.001Z"
                    />
                    <path
                      fill="#B79197"
                      d="M218.267 193.238h-4.948l-2.354-19.365 7.303.001-.001 19.364Z"
                    />
                    <path
                      fill="#08172E"
                      d="m218.442 198.476-15.217-.001v-.195c0-1.594.624-3.122 1.735-4.249a5.88 5.88 0 0 1 4.188-1.76l2.78-2.139 5.186 2.139h1.328v6.205ZM230.645 100.571c1.195 1.516.597 6.67.597 6.67s2.092 16.676 1.196 18.192c-.897 1.516.597 2.728 1.494 4.851.896 2.122 1.793 7.276 1.793 7.276 5.08 4.245 4.781 23.649 4.781 23.649l1.794 17.282c-.598 1.819-8.966 2.122-10.161 1.819-1.196-.304-12.851-43.053-12.851-43.053s.598 41.234.598 43.053c0 1.819-8.069.909-9.862.909-1.793 0-13.149-74.281-13.149-74.281v-4.244l1.494-2.123s31.08-1.516 32.276 0Z"
                    />
                    <path
                      fill="#08172E"
                      d="m227.808 50.934 7.339 4.743 3.55 3.02-4.709 30.452s7.154 27.681-4.12 25.975c-11.274-1.707-10.642-26.583-10.642-26.583l8.582-37.607Z"
                    />
                    <path
                      fill="#B79197"
                      d="M217.988 94.194a3.332 3.332 0 0 0 4.073-.501c.351-.35.623-.773.795-1.241l11.961.293-3.296-5.348-10.853.542a3.34 3.34 0 0 0-2.399.173 3.413 3.413 0 0 0-1.68 1.746 3.481 3.481 0 0 0-.112 2.437 3.42 3.42 0 0 0 1.511 1.898Z"
                    />
                    <path
                      fill="#B79297"
                      d="M223.955 46.816c-5.22 0-9.452-4.294-9.452-9.59s4.232-9.59 9.452-9.59c5.221 0 9.452 4.294 9.452 9.59s-4.231 9.59-9.452 9.59Z"
                    />
                    <path
                      fill="#25100B"
                      d="M234.676 30.925c-1.061-1.666-3.053-2.776-4.984-2.464a6.946 6.946 0 0 0-1.487-3.4 6.8 6.8 0 0 0-3.01-2.125 6.712 6.712 0 0 0-3.659-.23 6.773 6.773 0 0 0-3.247 1.728 2.097 2.097 0 0 0-2.07-.21 4.381 4.381 0 0 0-1.681 1.369 10.006 10.006 0 0 0-2.062 4.862 10.08 10.08 0 0 0 .691 5.246c-.236-.87.624-1.689 1.493-1.884.868-.196 1.779-.01 2.66-.138 1.129-.163 2.144-.827 3.275-.977.95-.126 1.906.122 2.832.37.927.247 1.88.5 2.832.385.952-.115 2.178 3.544 2.161 6.122-.003.488.096 1.115.567 1.219.579.127.915-.684 1.466-.905.254-.074.527-.045.76.081.234.126.41.339.491.594a1.708 1.708 0 0 1-.317 1.511 4.925 4.925 0 0 1-1.192 1.049l.227.191c.378.507 1.162.529 1.706.216a3.713 3.713 0 0 0 1.225-1.415c1.008-1.7 1.891-3.511 2.247-5.462.355-1.95.138-4.067-.924-5.733Z"
                    />
                    <path
                      fill="#08172E"
                      d="m231.34 59.592 4.247-3.693s4.959 1.57 5.8 4.87c6.619 8.587 10.184 18.614 11.141 29.873-8.641 3.311-19.222 4.486-30.606 4.777l2.355-8.957 16.185-2.985-9.122-23.885Z"
                    />
                    <path
                      fill="#4A5E49"
                      d="m246.389 194.254 2.269-3.699.453 2.114c.079.37.159.746.232 1.119a32.875 32.875 0 0 1 2.001-1.57c2.06-1.517 4.119-3.035 6.177-4.556l-.644 3.792c-.397 2.334-.812 4.717-1.795 6.852-.109.241-.227.48-.353.713h-9.576a3.134 3.134 0 0 1-.162-.713c-.15-1.449.638-2.813 1.398-4.052ZM161.761 190.004l-4.292-6.998-.858 3.999c-.15.7-.3 1.412-.439 2.118-1.22-1.056-2.517-2.033-3.786-2.971a7975.367 7975.367 0 0 1-11.686-8.619l1.219 7.173c.752 4.417 1.537 8.925 3.396 12.963.206.458.429.909.668 1.35H164.1c.145-.409.246-.834.3-1.265a.406.406 0 0 0 .006-.085c.284-2.739-1.208-5.321-2.645-7.665Z"
                    />
                    <path
                      fill="#E5E7EB"
                      d="M165.129 199.168h19.71a3.367 3.367 0 0 0 2.394-1.007 3.47 3.47 0 0 0 .994-2.43v-70.154a3.467 3.467 0 0 0-.994-2.429 3.368 3.368 0 0 0-2.394-1.008h-19.71a3.372 3.372 0 0 0-2.395 1.008 3.466 3.466 0 0 0-.993 2.429v70.154c.001.912.358 1.785.993 2.43a3.37 3.37 0 0 0 2.395 1.007Z"
                    />
                    <path
                      fill="#3F3D56"
                      d="M169.783 123.931h10.108c.337 0 .661-.136.9-.379.238-.242.373-.57.373-.913v-3.686c0-.342-.135-.67-.373-.913a1.27 1.27 0 0 0-.9-.379h-10.108a1.27 1.27 0 0 0-.9.379 1.306 1.306 0 0 0-.373.913v3.686c0 .343.135.671.373.913.239.243.563.379.9.379Z"
                    />
                    <path
                      fill="#8D8B8B"
                      d="m140.876 199.271 121.76.092a.35.35 0 0 0 .349-.355.357.357 0 0 0-.102-.251.348.348 0 0 0-.247-.105l-121.76-.092a.356.356 0 0 0 0 .711Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M267 0H0v204h267z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className=' bg-primary rounded-md p-4 text-background'>
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
            <div className='w-full h-full flex justify-center mt-6 ' >
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
                <div className="w-full h-full flex flex-col items-end py-10 md:py-0 md:mb-0 mb-[60px] relative ">
                    <LastProjectCard />
                </div>
            </div>
            {/*  Filtres et Cards */}
            <div className="flex flex-col justify-start gap-4 w-full items-center">
                    <Filter />
                    <div className="flex flex-col gap-4 w-full z-1 items-center justify-start lg:flex-row lg:flex-wrap lg:justify-center lg:gap-4 my-8">
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
