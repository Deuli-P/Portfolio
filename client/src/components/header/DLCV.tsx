'use client'

import { useRef, useState } from 'react';
import { FaDownload } from "react-icons/fa6";
import CTASecond from '../CTA/CTASecondary';


const TelechargerCV = () => {

    // useRef pour fermer si clicker hors du container
    const modal = useRef<HTMLDivElement>(null);

    const [ startDownload, setStartDownload ] = useState<boolean>(false);


    const handleDownload = () => {  
        console.log("download");
        const downloadLink = document.createElement('a');
        downloadLink.href = '/CV_Pierre-Antoniutti.pdf';
        downloadLink.download = 'CV_Pierre-Antoniutti.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        setStartDownload(false);
    }

  return (
    <div className='relative'>
        <div 
            className='text-center text-primary bg-secondary md:flex md:flex-row items-center md:gap-4 shadow-lg rounded-full md:rounded-4xl p-2 md:px-4 md:py-2 whitespace-nowrap '
            onClick={()=>setStartDownload(true)}
        >
                <p className='hidden md:block'>{`Télécharger CV`}</p>
                <p className='md:hidden'>CV</p>
            <FaDownload className=" size-6 p-[2px] hidden md:block"/>
        </div>
        {startDownload ? 
                (
                    <div className='absolute size-full top-[150px] left-0'>
                        <div className='size-full relative flex justify-center items-center' >
                            <div id="download-modal" ref={modal} className='absolute rounded-md z-20 p-6 bg-foregroundAccent shadow-md text-secondary flex flex-col gap-4 '>
                                <p className='text-lg'>Voulez-vous télécharger le CV ?</p>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <button onClick={handleDownload} className='px-4 py-2 rounded-full bg-accent hover:opacity-75' name='Confirm téléchargement'>
                                        Confirm
                                    </button>
                                    <CTASecond>
                                        <span 
                                            onClick={() => setStartDownload(false)} 
                                            >
                                            Annuler
                                        </span>
                                    </CTASecond>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                    null
            }
    </div>
  )
}

export default TelechargerCV;