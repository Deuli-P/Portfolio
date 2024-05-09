import FormEmail from "@/components/footer/formEmail";

const Contact = () => {



    return (
        <footer id='contact' className="bg-[#08172E] px-4 py-10 text-white flex flex-col items-center w-full ">
            <h2 className="text-bold text-4xl"> Contact</h2>
                <FormEmail />
        </footer>
    )
}

export default Contact;