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
        <form className={`contact_form-form `} 
            onSubmit={handleSubmit(onSubmit)}>
            <label 
                className={`contact_form-label `}
                >
                Name
                <input 
                    type="text" 
                    name="name" 
                    id="nom" 
                    autoComplete='on'
                    {...register("name", { required: true })}
                    placeholder="Votre nom" 
                    className={`contact_form-input form_input-height`}
                />
            </label>
            <label 
                className={`contact_form-label `}
            >
                Email
                <input 
                    autoComplete='on'
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Votre email"
                    {...register("email", { required: true })}
                    required
                    className={`contact_form-input form_input-height`}
                    />
            </label>
            <label 
                className={`contact_form-label `}
            >
                Entreprise
                <input 
                    type="text" 
                    name="entreprise" 
                    id="entreprise" 
                    placeholder="Votre entreprise" 
                    {...register("entreprise",)}
                    className={`contact_form-input form_input-height`}
                />
            </label>
            <label 
                className={`contact_form-label  `}
            >
                Message
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Votre message"
                    {...register("message", { required: true })}
                    className={`contact_form-input `}
                />
            </label>
            <button
                type="submit"
                className={`contact_form-button button `}
            >Submit</button>
        </form>
    );
};

export default Form;