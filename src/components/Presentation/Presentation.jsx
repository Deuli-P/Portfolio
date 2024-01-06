// eslint-disable-next-line react/prop-types
import photoDesktop from '/pictures/images/pierre-antoniutti-crete-400.webp';
import photoTablet from '/pictures/images/pierre-antoniutti-crete-300.webp';
import photoMobile from '/pictures/images/pierre-antoniutti-crete-180.webp';
import { useState, useEffect } from 'react';

const Presentation = () => {

    const [photo, setPhoto] = useState();

    useEffect(() => {
        if (window.innerWidth < 600) {
            setPhoto(photoMobile);
        }
        else if (window.innerWidth >= 740 && window.innerWidth < 1024) {
            setPhoto(photoTablet);
        }
        else {
            setPhoto(photoDesktop);
        }
    },[innerWidth]);
    
    return (
        <>
             <img src={photo} alt="Pierre Antoniutti" rel="preload"/>
                <div className={`home-title-container`}>
                    <h1 >Pierre Antoniutti</h1>
                    <h2>Frontend & mobile developper</h2>
                    <div></div>
                </div>
        </>
    );
};

export default Presentation;