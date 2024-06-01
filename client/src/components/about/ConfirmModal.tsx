'use client';

import { useState, useRef } from 'react';
import CTAPrimary from "./../CTA/CTAPrimary";
import CTASecond from '../CTA/CTASecondary';
import { FaDownload } from "react-icons/fa6";

const DonwloadCV = () => {

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
    <div className='relative flex justify-center items-center '>
        <div 
            className='flex flex-row gap-4 w-full justify-center items-center relative flex-wrap '
        >
            <CTAPrimary>
                <div onClick={()=>setStartDownload(!startDownload)} className=' flex flex-row flex-nowrap items-center justify-center gap-3 w-full'>
                    <span className='text-sm whitespace-nowrap text-ellipsis font-semibold lg:after:content-[Télécharger] after:content-none'> Télécharger CV </span>
                    <FaDownload className=" size-8 p-[2px]"/>
                </div>
            </CTAPrimary>
        </div>
        {startDownload ? 
            (
                <div className='absolute w-[100vw] h-[100vh] top-[-500px] '>
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

export default DonwloadCV;