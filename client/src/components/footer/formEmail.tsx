'use client';

import { CircleLoader } from './../Loader';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import sendForm from './sendForm';
import Message from './message';
import { motion } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";



type FormData = {
    name: string
    email: string
    message: string
    entreprise?: string;
    date: string;
    time: string;
  }

  // Bouton Submit a 4 etats: 
    // 1. Envoyer



    // 2. Envoi en cours

    // 3. Message envoyé

    // 4. Erreur lors de l'envoi



const FormEmail = ()=> {

    const { register, reset, handleSubmit, formState, formState:{errors, isSubmitSuccessful, isSubmitted}} = useForm<FormData>();

    const [ isLoading, setIsLoading] = useState(false);
    const [ isSubmitSuccess,  setIsSubmitSuccess] = useState(false);
    const [ response, setResponse] = useState<string | null>(null);

    const renderLoading = (
        <div className=" w-full h-full bg-yellow-300 rounded-md px-4 py-2  z-20 text-lg text-center " >
            <CircleLoader />
        </div>
    )

    const renderValid = (
        <div className="bg-green-400 max-w-[250px] w-full h-full rounded-md px-4 py-2  z-20 text-lg text-center ">
            Votre message est envoyé, merci. <br/> Je vous repondrez sous peu.
        </div>
    )


    const renderError = (
        <div className="bg-red-400 h-full w-full rounded-md px-4 py-2  z-20 text-lg text-center  " >
            <span>{errors.root?.type}</span>
            {`Votre message n'a pas pu être envoyé.`}<br/> Merci de réessayer.
        </div>
    )

    const onSubmit = (data: FormData) => {
        setIsLoading(true);
        sendForm(data)
            .then((response) => {
                console.log('[FORM]Email sent:', response.text);
                setResponse(response.text);
            })
            .catch((error) => {
                // Une erreur s'est produite lors de l'envoi de l'email
                console.log('[FORM]Error sending email:', error);
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(()=>{
                    reset();
                },4000)
            })
    } 



  
    return (
        <form 
            id='form-contact'
            className="flex bg-[#08172E] xl:h-full py-12 flex-col gap-[4px] w-full lg:w-full xl:w-1/2 items-center relative" 
            onSubmit={handleSubmit(onSubmit)}
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
            <label 
                className={`label-form `}
            >
                Message
                <textarea 
                    id="message" 
                    placeholder="Your message"
                    {...register("message", { required: true })}
                    className={`input-form mb-2 h-24 md:h-32`}
                />
            </label>
            {errors.root ?
                (<Message>
                    {renderError}
                </Message>
                )
                :
                null
            }
            <div className=' h-12 md:h-16'>
                { !isSubmitted ?
                    (
                        <motion.button 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.4, type: "spring" ,ease: "easeOut"}}
                            className=' bg-accent text-primary font-bold w-full h-full rounded-full px-6 py-2 ' type='submit'
                        >
                            Envoyer
                        </motion.button>
                    )
                    :
                    ( isLoading  ?
                        (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.4, type: "tween",ease: "easeOut"}}
                                className='bg-blue-400 w-full h-full rounded-full px-6 py-2 flex justify-center items-center ' 
                            >
                                    <div className={`dot-spinner size-4 md:size-10 `}>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                    <div className={`dot-spinner__dot before:bg-background`}></div>
                                </div>
                            </motion.div>
                        )
                        :
                        (
                            isSubmitSuccessful ?
                                (
                                    <div className=' h-full w-12 md:w-16 rounded-full bg-green-300 py-2 flex justify-center items-center '>
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.4, type: "tween",ease: "easeOut"}}
                                            className="text-background size-full flex justify-center items-center "
                                        >
                                            <FaCheckCircle />
                                        </motion.div>
                                    </div>
                                )
                                :
                                (
                                    <div className=' h-full w-12 md:w-16 rounded-full bg-red-300 py-2 flex justify-center items-center '>
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.4, type: "tween",ease: "easeOut"}}
                                            className="text-background size-full flex justify-center items-center "
                                        >

                                            <MdError />
                                        </motion.div>
                                    </div>
                                )
                        )
                    )
            }
            </div>
        </form>
    )
}

export default FormEmail;