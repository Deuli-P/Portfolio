'use client';
import { motion } from "framer-motion";

const FakeCard= ()=> {
    return(
        <motion.div 
            className=" max-w-[350px] max-h-[452px] min-h-[360px] min-w-[300px] rounded-lg bg-secondary" 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        />
    )
}

export default FakeCard;