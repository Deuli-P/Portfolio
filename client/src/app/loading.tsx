'use client';

import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    Array(3).map((_, index) => (
        <article className=" w-full " key={`loading-experience-${index}`}>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.2, type: "tween"}}
                className="bg-secondary w-full h-16 text-foreground font-semibold text-xl flex flex-row justify-between items-center rounded-md"/>
        </article>
    ))
)
}

