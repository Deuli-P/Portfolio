import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link as ScrollLink,  animateScroll as scroll } from 'react-scroll';
import useTheme from "../../Context/ThemeContext";
import Burger from "./Burger/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header = () => {


    const { toggleTheme, theme } = useTheme();

    const handleThemeChange = () => {
        toggleTheme();
    };



const[isOpen, setIsOpen] = useState(true);

const [windowWidth, setWindowWidth] = useState(window.innerWidth);


useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowWidth > 800) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  },[windowWidth]);

// Permet d'ouvrir/fermer le menu responsive.
const HandleOpen = () => {
    setIsOpen(!isOpen);
}


    return (
            <nav className={`header-wrapper ${theme === "dark"? "light": "dark"}`} id="home_header">
                <div className="header-left">
                    <div className={`header-name`}> 
                        <Link 
                            to="/" 
                            onClick={()=> {
                                scroll.scrollToTop();

                            }}
                        >
                            Pierre
                        </Link>
                    </div>
                        {windowWidth < 800? 
                        (
                            <Burger HandleOpen={HandleOpen} isOpen={isOpen}/>
                        )
                        : null}
                </div>
                <div className={`header-right ${isOpen? "open": ""} `}>
                    <ul className="header-list">
                            <li className={`header-liste-li`} >
                                <NavLink
                                    to="/"
                                    className={`header-link accueil `}
                                    onClick={()=> {
                                        scroll.scrollToTop();
                                
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li`} >
                                <Link
                                        to="/#home_expertise"
                                        className={`header-link `}
                                    >
                                    Expertises
                                </Link>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li `} >
                                <Link
                                    to="/#home_projets"
                                    className={`header-link  `}
                                >
                                    Projects
                                </Link>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li`} >
                                <Link
                                        to="/#home_experiences"
                                        className={`header-link `}
                                    >
                                        Experiences
                                    </Link>
                            </li>
                        </ul>
                        <div className="header-buttons-container">
                            <Link
                                to="/#contact-lien"
                                className={`button header-button `}
                            >
                                Contact me
                            </Link>
                            <span 
                                onClick={handleThemeChange}>
                                    {theme === "dark"? 
                                        <FontAwesomeIcon icon={faSun} className="fa-sun fa-solid" />
                                    :
                                        <FontAwesomeIcon icon={faMoon} className="fa-moon fa-solid" />
                                    }
                                </span>
                        </div>
                </div>
            </nav>
    );
};

export default Header;
