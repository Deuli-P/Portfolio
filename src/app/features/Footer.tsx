'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import CTA from "@/components/Buttons/CTA/CTA";
import { CircleLoader } from "@/components/Loader";
import { motion } from 'framer-motion';
// Formulaire de  contact 

const Contact = () => {


    const { register, handleSubmit, formState: { errors },} = useForm();

    const reset = () => {
        document.querySelectorAll('input').forEach( input => input.value = "")
        document.querySelectorAll('textarea').forEach( input => input.value = "")
        setTimeout(() => {
            setShow(false)
            setTimeout(() => {
                setSend(false)
            },300)
        }, 3000);
    }

    const message = `Votre message est envoyé, merci.${<br/>} Je vous repondrez sous peu.`

    const [ send, setSend ] = useState(true);
    const [ show, setShow ] = useState(true);
    const [ state , setState ] = useState< "valid" | "error" | "loading">("loading");

    const onSubmit = (data:any) => {
        const date = new Date();
        const time = date.getHours() + ":" + date.getMinutes();
        data.date = date.toLocaleDateString();
        data.time = time;

        try{
            emailjs
            .send("service_wvheinq", "template_bv3q5z9", data, "v5gGgV-UHFvG-QHCE")
            .then(
                (result) => {
                console.log("[EMAILJS] Succes",result.text);
                },
                (error) => {
                console.log("[EMAILJS] Fail",error.text);
                }
            );
         setSend(true);
         setShow(true);
        }catch(errors){
            console.log("[FORM] Form non envoyé",errors)
        }
    reset();
    }


    return (
        <footer id='contact' className="bg-[#08172E] px-4 py-10 text-white flex flex-col items-center w-full ">
            <h2 className="text-bold text-4xl"> Contact</h2>
            <form 
                className="flex flex-col gap-[4px] w-full md:w-1/2 items-center relative" 
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
                <CTA>
                    <button
                        type="submit"
                        className={`px-6 relative `}
                    >
                        Envoyer
                    </button>
                </CTA>
            </form>
        </footer>
    )
}

export default Contact;