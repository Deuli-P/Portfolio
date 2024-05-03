import emailjs from '@emailjs/browser';


export default async function sendForm(){
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
}
