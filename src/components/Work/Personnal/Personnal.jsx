import { useEffect, useState } from 'react';
import useTheme from "../../../Context/ThemeContext";


const Personnal = () => {

    const { theme } = useTheme();


    const [ isDark, setIsDark] = useState(false)

    useEffect(()=> {
        if(theme === "dark"){
            setIsDark(true)
        }
        else{
            setIsDark(false)
        }
    }, [theme])

    return (
        <div id='works_personnal_container'>
        <div id='works_personnal_text_container'>
            <h3 id='works_personnal_text_title' >
                My 
                {window.innerWidth >= 1024 ? <br/> : " "}
                Projects
            </h3>
            <p id='works_personnal_text_p' >
            When I was training in front-end web development, I wanted to try my hand at mobile development through a small image dialog application.
            </p>
        </div>
        <div className='works_personnal_content-container'>
            <div className="works_personnal-content">
                        <video loop muted autoPlay key={isDark? 'dark': 'light'} className="video3D" preload='false' controlsList='nodownload'>
                        <source src={isDark ? "/videos/PictoChat-Mockup-Light.mp4" : "/videos/PictoChat-Mockup-Dark.mp4"} type="video/mp4"/>
                        </video>
                <div className={`work_personnal_content_text-container `}>
                    <div className="work_personnal_content-text">
                    <div className={`work_personnal_content-fleche `}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                        >
                            <path
                                d="m16.5,156.5c18.5,-42.33 80.9,-128.9 182.5,-136.5c127,
                                -9.5 -27,2 -14.5,-12.5c12.5,-14.5 113,5 121.5,3.5c8.5,-1.5 -82.5,44.5 -92,
                                36c-9.5,-8.5 96.23,-42.87 -7.5,-13.5c-109.5,31 -103,40.5 -204,127"
                                id="svg_1" 
                                strokeLinecap="round" 
                            />
                        </svg>
                    </div>
                    <strong>Main project</strong>
                    <h4>PictoChat</h4>
                    </div>
                        <a 
                            href="https://github.com/Deuli-P/PictoChat"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Watch Project
                        </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Personnal;