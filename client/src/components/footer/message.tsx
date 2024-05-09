'use client';

import { motion } from 'framer-motion';

const Message = ({ children }: { children: any }) => { 




    

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.6,
                type:"tween"
            }}
            exit={{opacity: 0}}
            className="absolute bottom-[20%]"
        >
            {children}
        </motion.div>
    )

}

export default Message