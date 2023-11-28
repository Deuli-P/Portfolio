import{useEffect, useState} from 'react';

const ScrollToUp = () => {

    const [buttonActive, setButtonActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setButtonActive(true);
            } else {
                setButtonActive(false);
            }
        })
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
             behavior: 'smooth',
        });
    }

    return (
        <div>
            {buttonActive && 
                <div 
                    onClick={scrollToTop}
                    className={`buttonToTop ${buttonActive ? 'active' : ''}`}                >
                        <i className='fas fa-chevron-up'></i>
                </div>
            }
        </div>
    );
};

export default ScrollToUp;