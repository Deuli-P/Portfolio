import { CtaType } from './../../lib/types';


export const CTAThird =({children}:CtaType) =>{
    return(
        <div className='hover:bg-secondary py-2 px-4'>
            {children}
        </div>
    )
}

export default CTAThird;