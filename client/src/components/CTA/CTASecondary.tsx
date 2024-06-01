import { CtaType } from './../../lib/types';

const CTASecond = ({children}:CtaType)=> {
    return (
        <div
            className='bg-secondary relative group py-2 px-4 overflow-hidden text-primary shadow-lg cursor-pointer shaodw-neutral-50 rounded-full flex flex-row gap-5 items-center'
        >
            {/*  on peut pas faire avec le after l'animation */}
                {children}
        </div>
    )
}

export default CTASecond;