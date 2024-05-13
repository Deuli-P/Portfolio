import FormEmail from "@/components/footer/formEmail";
import { MdEmail } from "react-icons/md";

const Contact = () => {



    return (
        <footer id='contact' className="bg-[#08172E] px-4 py-10 text-white flex flex-col items-center w-full ">
            <div className='mb-4 bg-background text-primary px-6 py-2 flex flex-row items-center gap-4'>
                      <MdEmail className='size-6 '/>
                    <h2 className="text-3xl font-bold text-center  ">Contact</h2>
                  </div>
                <FormEmail />
        </footer>
    )
}

export default Contact;