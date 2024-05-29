'use client'

import { motion } from 'framer-motion';

const HandWave = () => {
  return (
    <motion.span 
        className="absolute -bottom-4 right-0 text-4xl"
        initial={{ opacity: 0, scale: 0, rotate: -70 }}
        animate={{ opacity: 1, scale: 1, rotate:0}}
        transition={{
            duration: 0.7,
            delay: 0.1,
            type: "spring",
        }}
    >
        👋
    </motion.span>
  )
}

export default HandWave