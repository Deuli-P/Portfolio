import emailjs from '@emailjs/browser';

type FormData = {
        entreprise?: string;
        email: string;
        message: string;
        name: string;
        date: string;
        time: string;
}
export default async function sendForm(data: FormData){

    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    data.date = date.toLocaleDateString();
    data.time = time;


    try{
        const response = emailjs.send("service_wvheinq", "template_bv3q5z9", data, "v5gGgV-UHFvG-QHCE")
        return response;
    }catch(errors){
        console.log("[EMAILJS] Form non envoyé",errors)
        throw errors;
    }
}
