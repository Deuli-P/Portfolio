'use client';

import { useState, useRef, useEffect } from 'react';
import { FaDownload } from "react-icons/fa6";
import CTA from "./../CTA";
import { FaLinkedin ,FaGithub, FaCheck } from "react-icons/fa";


const ConfirmModal = () => {

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
    <div className='relative flex justify-center items-center'>
        <div 
                    className='flex flex-row gap-4 w-full justify-center mt-8 relative '
                >
                    <div
                        className=' size-16 border-2 border-[#e5e7eb]/75 rounded-lg shadow-xl bg-[#08172E] text-white font-bold text-[1.5rem] hover:bg-[#C2C1C1]/75 hover:text-[#08172E] hover:border-accent transition-colors duration-300 ease-in-out flex justify-center items-center  '
                    >
                        <a href="https://linkedin.com/in/pierre-antoniutti/" target='_blank ' className='size-[75%]'>
                            <FaLinkedin className=" size-full "/>
                        </a>
                    </div>
                    <CTA>
                        <div onClick={()=>setStartDownload(!startDownload)} className=' flex flex-row flex-nowrap items-center justify-center gap-3 w-full'>
                            <span className='text-sm whitespace-nowrap text-ellipsis font-semibold'> Télécharger CV </span>
                            <FaDownload className=" size-8 p-[2px]"/>
                        </div>
                    </CTA>
                    <div
                        className=' size-16 border-2 border-[#e5e7eb]/75 rounded-full shadow-xl bg-[#08172E] text-white font-bold text-[1.5rem] hover:bg-[#C2C1C1]/75 hover:text-[#08172E] hover:border-accent transition-colors duration-300 ease-in-out flex justify-center items-center  '
                    >
                        <a href="https://github.com/Deuli-P" target='_blank ' className='size-[80%]'>
                            <FaGithub className=" size-full "/>
                        </a>
                    </div>
                </div>
        {startDownload ? 
            (
                <div className='absolute w-[100vw] h-[100vh] top-[-500px] '>
                    <div className='size-full relative flex justify-center items-center' >
                        <div id="download-modal" ref={modal} className='absolute rounded-md z-20 p-6 bg-foregroundAccent shadow-md text-secondary flex flex-col gap-4 '>
                            <p className='text-lg'>Voulez-vous télécharger le CV ?</p>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <button onClick={handleDownload} className=' px-4 py-2 rounded-full bg-accent hover:opacity-75'>
                                    Confirm
                                </button>
                                <button onClick={() => setStartDownload(false)} className=' px-[4px] py-[2px] rounded-sm underline-offset-2  hover:underline transition-all duration-200'>Annuler</button>
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

export default ConfirmModal