'use client';
import { useState } from 'react';
import { CircleLoader } from './../Loader';
import { motion } from 'framer-motion';

const Message = ()=> {


    const [ send, setSend ] = useState(true);
    const [ state , setState ] = useState< "valid" | "error" | "loading">("loading");


    const renderLoading = (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.6,
                type:"tween"
            }}
            exit={{opacity: 0}}
            className="flex flex-col gap-4 items-center w-full"
        >
            <CircleLoader/>
            <p className="text-center">Envoi en cours...</p>
        </motion.div>
    )

    const renderValid = (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.6,
                type:"tween"
            }}
            exit={{opacity: 0}}
            className="bg-green-400 rounded-md shadow-md px-4 py-2  z-20 text-lg text-center"
        >
            Votre message est envoyé, merci. <br/> Je vous repondrez sous peu.
        </motion.div>
    )


    const renderError = (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.6,
                type:"tween"
            }}
            exit={{opacity: 0}}
            className="bg-red-400 rounded-md shadow-md px-4 py-2  z-20 text-lg text-center"
        >
            Votre message n'a pas pu être envoyé. <br/> Merci de réessayer.
        </motion.div>
    )

    return(
        <div>
            
        </div>
    )

}