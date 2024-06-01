import FormEmail from "@/components/footer/formEmail";
import { LiaLinkedin } from "react-icons/lia";
import { FaThreads } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {


    return (
        <footer id='contact' className=" text-white lg:bg-primary flex flex-col lg:flex-row items-center w-full border-t-xl">
          <div className=" flex flex-col items-center justify-center lg:items-start gap-8 py-10 lg:px-8 lg:h-full lg:w-[400px] xl:w-auto bg-secondary w-full lg:rounded-tr-[50px] rounded-0">
            <div className='mb-4 bg-primary text-background px-6 py-2 flex flex-row items-center gap-4'>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={22}
                  fill="none"
                >
                  <path
                    fill="rgb(249 246 244)"
                    d="m5.3 1.074-.417.278a.5.5 0 0 0 .122.126l.294-.404Zm3.133 4.897.447-.224a.5.5 0 0 0-.46-.276l.013.5ZM5.299 8.517l.474-.159a.5.5 0 0 0-.01-.026l-.464.185Zm4.113 7.247.359-.348-.359.348Zm3.134-1.763-.296.403.296-.403Zm3.526 5.485-.491.094c.004.021.01.042.016.063l.475-.157Zm-5.484 1.37-.099.491.098-.49Zm-4.897-3.72-.414.28.02.028.394-.309Zm-3.526-6.072-.46.197a.492.492 0 0 0 .011.022l.45-.22Zm-.783-5.876-.488-.11.488.11Zm7.05.783-.488.11a.5.5 0 0 0 .5.39l-.012-.5Zm14.494-1.175h.5a.5.5 0 0 0-.5-.5v.5Zm0 11.752v.5a.5.5 0 0 0 .5-.5h-.5Zm-5.875-.5a.5.5 0 0 0 0 1v-1Zm-2.939-3.81-.319.386a.5.5 0 0 0 .626.01l-.307-.395ZM8.751 7.154a.5.5 0 1 0-.638.77l.638-.77Zm-.586-2.357v-.5H7.54l.139.61.487-.11Zm-.18 1.399a.257.257 0 0 1-.022-.148c.007-.05.025-.073.022-.069a.847.847 0 0 1-.204.164c-.27.176-.67.36-1.128.577-.431.203-.918.437-1.27.694-.174.127-.357.29-.476.492a.889.889 0 0 0-.072.798l.928-.371c.02.049-.001.092.005.08a.79.79 0 0 1 .205-.192c.261-.19.656-.385 1.107-.597.423-.2.904-.42 1.246-.642.168-.11.353-.25.478-.429.142-.202.23-.497.076-.805l-.894.448Zm-3.16 2.481c.497 1.482.902 2.68 1.51 3.836.614 1.164 1.424 2.27 2.719 3.6l.717-.696c-1.243-1.278-1.99-2.307-2.55-3.37-.565-1.072-.947-2.193-1.448-3.688l-.948.318Zm4.229 7.437c.2.206.457.288.716.265.23-.02.437-.122.602-.224.33-.205.674-.538.968-.827.318-.313.59-.585.824-.758a.8.8 0 0 1 .215-.126c.013-.003-.056.015-.129-.039l.592-.806a.832.832 0 0 0-.735-.117c-.2.056-.384.171-.537.284-.306.226-.64.564-.93.848-.313.307-.578.556-.796.692a.809.809 0 0 1-.12.063c-.032.013-.045.014-.044.014a.137.137 0 0 1 .09.034l-.716.697Zm3.196-1.709c1.152.846 1.857 1.544 2.337 2.309.479.764.757 1.634.994 2.867l.982-.189c-.247-1.285-.554-2.293-1.129-3.21-.574-.915-1.39-1.7-2.592-2.583l-.592.806Zm3.347 5.239c-.045-.136.021-.216 0-.184a.809.809 0 0 1-.183.168c-.221.163-.587.35-1.068.51-.96.32-2.29.503-3.66.23l-.197.98a8.325 8.325 0 0 0 4.173-.26c.547-.183 1.014-.412 1.344-.653.162-.12.315-.259.422-.418.102-.153.212-.405.118-.688l-.949.315Zm-4.911.723c-1.178-.235-1.77-.46-2.33-.912-.597-.482-1.175-1.232-2.272-2.628l-.786.618c1.057 1.346 1.722 2.216 2.43 2.788.748.603 1.528.868 2.761 1.115l.197-.98Zm-4.581-3.511c-1.586-2.34-2.335-3.65-3.49-6.011l-.899.44c1.176 2.402 1.949 3.753 3.561 6.132l.828-.561Zm-3.48-5.989c-.577-1.345-.852-2.323-.943-3.161-.09-.833-.002-1.558.188-2.409L.894 5.08C.69 5.99.582 6.833.688 7.812c.105.973.419 2.052 1.018 3.449l.919-.395Zm-.755-5.57c.072-.321.294-.76.636-1.252.335-.482.757-.977 1.182-1.407.428-.433.842-.78 1.155-.98.163-.105.264-.146.308-.157.061-.015-.137.049-.268-.148l.832-.555C5.486.453 5.104.483 4.917.528c-.206.05-.418.161-.612.285-.4.256-.872.66-1.327 1.12a11.96 11.96 0 0 0-1.293 1.54C1.319 4 1.008 4.568.894 5.08l.976.217Zm3.135-3.818c.958.699 1.575 1.271 2.01 1.938.435.664.713 1.46.925 2.643l.984-.176C8.7 4.629 8.388 3.688 7.853 2.869 7.32 2.053 6.589 1.396 5.593.67l-.588.808Zm3.44 4.993-.025-1 .025 1Zm14.48 9.577h-5.874v1h5.875v-1Zm-.5-11.252v.587h1v-.587h-1Zm0 .587v11.165h1V5.383h-1Zm.194-.394-8.814 6.855.614.79 8.814-6.856-.614-.79Zm-8.188 6.865L8.75 7.153l-.638.77 5.68 4.7.638-.77ZM8.92 5.86l-.267-1.175-.975.221.266 1.176.976-.222Zm-.755-.564h14.76v-1H8.166v1Z"
                  />
              </svg>
              <h2 className="text-3xl font-bold text-center  ">Contact</h2>
            </div>
            <div className="w-[60%] xl:w-full xl:whitespace-nowrap flex flex-col gap-4 text-center xl:text-left text-primary">
              <p className="text-xs xl:text-2xl ">
                {`Besoin d'une information suplémentaire?`}<br/>
                <span className="font-bold ">Envoyez moi un message</span>
              </p>
              <p>
                {`par email via le formulaire de contact ou en suivant les liens suivant 😊`}
              </p>
            </div>
            <div className='min-w-[260px] max-w-[310px] flex flex-col items-center xl:items-start gap-6'>
              <h5 className="font-bold text-xl text-primary xl:text-3xl">Suivez moi</h5>
              <div className="flex flex-col w-full gap-4 items-center">
                <a href="https://linkedin.com/in/pierre-antoniutti/" aria-label="Linkedin" className="bg-primary text-accent flex items-center shadow-lg hover:shadow-xl justify-center w-full h-14 rounded-md">
                  <LiaLinkedin className="size-11"/>
                </a>
                <a href="https://github.com/Deuli-P/" aria-label="Github" className="bg-primary text-accent flex items-center justify-center shadow-lg hover:shadow-xl w-full h-14 rounded-md">
                  <FaGithub className="size-11"/>
                </a>
                <a href="https://www.threads.net/@pierreantoniutti" aria-label="Thread" className="bg-primary text-accent flex items-center shadow-lg hover:shadow-xl justify-center w-full h-14 rounded-md">
                  <FaThreads className="size-11"/>
                </a>
              </div>
            </div>
          </div>
          <FormEmail />
        </footer>
    )
}

export default Contact;