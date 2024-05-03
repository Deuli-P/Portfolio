'use client';

import { CircleLoader } from './../Loader';
import { motion } from 'framer-motion';
import { useFormContext } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import sendForm from './sendForm';

type FormEmailType = {
    children: React.ReactNode;
    onSubmit: () => void, 
}

const FormEmail =({
    children,
    onSubmit
}: ForEmailType )=> {

    const { register, handleSubmit } = useFormContext();

    const [data, setData] = useState("");

    return (
        <form 
                className="flex flex-col gap-[4px] w-full md:w-1/2 items-center relative" 
                onSubmit={()=>sendForm()}
            >
                <label 
                    className={`label-form `}
                    >
                    Name
                    <input 
                        type="text" 
                        id="nom" 
                        autoComplete='on'
                        {...register("name", { required: true })}
                        placeholder="Your name" 
                        className={`input-form`}
                    />
                </label>
                <label 
                    className={`label-form `}
                >
                    Email
                    <input 
                        autoComplete='on'
                        type="email" 
                        id="email" 
                        placeholder="Your email"
                        {...register("email", { required: true })}
                        required
                        className={`input-form`}
                        />
                </label>
                <label 
                    className={`label-form `}
                >
                    Entreprise
                    <input 
                        type="text" 
                        id="entreprise" 
                        placeholder="Your entreprise" 
                        {...register("entreprise",)}
                        className={`input-form`}
                    />
                </label>
                {/* message valid ,message error, chargement */}
                {send ? 
                    (
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            className={` ${show? null : "hidden" } absolute bottom-1/2 z-20`}
                        >
                            { state === "loading" ?
                                <div className="bg-accent px-8 py-2 rounded-md shadow-md">
                                    <CircleLoader />
                                </div>
                            :
                                state === "valid" ?
                                    (
                                        <p className={` bg-green-400 rounded-md shadow-md px-4 py-2  z-20 text-lg text-center`}>
                                            Votre message est envoyé, merci.
                                            <br/>
                                            Je vous repondrez sous peu.
                                        </p>
                                    )
                                    : 
                                    (
                                        <p className={`${show? null : "hidden" } absolute bg-red-400 bottom-1/2 rounded-md shadow-md px-4 py-2  z-20 text-lg text-center`}>
                                            {`Erreur dans l'envoi du formulaire, veuillez réessayer.`}
                                        </p>
                                    )
                            }
                        </motion.div>
                    )
                    : 
                    null
                }
                <label 
                    className={`label-form `}
                >
                    Message
                    <textarea 
                        id="message" 
                        placeholder="Your message"
                        {...register("message", { required: true })}
                        className={`input-form mb-2`}
                    />
                </label>
                <div>
                    {children}
                </div>
            </form>
    )
}

export default FormEmail;