'use client';
import { CtaType } from './../../lib/types';
import { motion } from 'framer-motion';

const CTAPrimary =({children}:CtaType) => {

    const animationButton ={
        intial:{
            x: 200,
            opacity: 0
        },
        animate:(index: number)=>({
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.05 * index,
                duration: 0.6
            }
        }),
    }

  return (
    <motion.div
            initial="initial"
            variants={animationButton}
            custom={2}
            className='bg-accent font-bold relative group hover:text-background py-2 px-4 overflow-hidden text-primary shadow-lg cursor-pointer shaodw-neutral-50 rounded-full flex flex-row gap-5 items-center z-[1]'
    >
        {/*  on peut pas faire avec le after l'animation */}
        <span className='absolute top-0 left-0 w-full h-full rounded-md bg-foregroundAccent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out -z-10'/>
            {children}
    </motion.div>
  )
}


export default CTAPrimary