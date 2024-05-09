
import Image from 'next/image';
import { useSectionInView } from '../lib/hooks';
import { FaLinkedin ,FaGithub } from "react-icons/fa";
import HandWave from './about/HandWave';
import ConfirmModal from './about/ConfirmModal';




const Intro=() =>{


    // const { ref } = useSectionInView("About", 0.5);

 

  return (
    <section id="about" className='relative mb-0 max-w-[50rem] text-left  md:mb-28 text-[#08172E]'
        // ref={ref} 
    >
        <div className='flex flex-col justify-center mt-[90px] items-center w-full h-auto px-2' >
            <div className='relative'>
                <div className=' size-40 rounded-full overflow-hidden border-orange-300 border-2 md:size-80 ' >
                    <Image
                        src={data.image}
                        alt={`${data.prenom} ${data.nom}`}
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
                        <span className='font-normal'>{data.text}</span>
                </h1>
                <ConfirmModal />
            </div>
        </div>
    </section>
  )
}

export default Intro;