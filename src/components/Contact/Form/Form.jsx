/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import "./Form.scss";


const Form = ({theme}) => {

    const { register, handleSubmit, formState: { errors },} = useForm();

    const reset = () => {
        document.querySelectorAll('input').forEach( input => input.value = "")
        document.querySelectorAll('textarea').forEach( input => input.value = "")
    }
    
    const onSubmit = (data) => {
        const date = new Date();
        const time = date.getHours() + ":" + date.getMinutes();
        data.date = date.toLocaleDateString();
        data.time = time;
        console.log("[FORM]data est:",data)
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
        }catch(errors){
            console.log("[FORM] Form non envoyé",errors)
        }
    reset();
    }
   
    return (
        <form className={`contact_form-form ${theme === "dark" ? "contact_form_light": "contact_form_dark"} `} 
            onSubmit={handleSubmit(onSubmit)}>
            <label 
                htmlFor="name"
                className={`contact_form-label ${theme === "dark"? "p1-light-color": "p1-dark-color"} `}
            >Name</label>
            <input 
                type="text" 
                name="name" 
                id="nom" 
                {...register("name", { required: true })}
                placeholder="Votre nom" 
                className={`contact_form-input ${theme === "dark"? "input-light-color": "input-dark-color"} `}
            />
            <label 
                htmlFor="email"
                className={`contact_form-label ${theme === "dark"? "p1-light-color": "p1-dark-color"} `}
            >Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Votre email"
                {...register("email", { required: true })}
                required
                className={`contact_form-input ${theme === "dark"? "input-light-color": "input-dark-color"} `}
            />
            <label 
                htmlFor="entreprise"
                className={`contact_form-label ${theme === "dark"? "p1-light-color": "p1-dark-color"} `}
            >Entreprise</label>
            <input 
                type="text" 
                name="entreprise" 
                id="entreprise" 
                placeholder="Votre entreprise" 
                {...register("entreprise",)}
                className={`contact_form-input ${theme === "dark"? "input-light-color": "input-dark-color"} `}
            />
            <label 
                htmlFor="message"
                className={`contact_form-label ${theme === "dark"? "p1-light-color": "p1-dark-color"} `}
            >Message</label>
            <textarea 
                name="message" 
                id="message" 
                placeholder="Votre message"
                {...register("message", { required: true })}
                className={`contact_form-input ${theme === "dark"? "input-light-color": "input-dark-color"} `}
                />
            <button
                type="submit"
                className={`contact_form-button button ${theme === "dark"? "input-light-color": "input-dark-color"} `}
            >Submit</button>
        </form>
    );
};

export default Form;