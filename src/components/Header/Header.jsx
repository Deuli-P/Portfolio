import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { Link,  animateScroll as scroll } from 'react-scroll';
import ThemeContext from "../../Context/ThemeContext";
import Burger from "./Burger/Burger";

const Header = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);

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
  }, [windowWidth]);

// Permet d'ouvrir/fermer le menu responsive.
const HandleOpen = () => {
    const icon = document.querySelector(".fa-solid");
    icon.style.transform ="rotate(180deg)";
    icon.style.filter ="blur(3px)";
    setIsOpen(!isOpen);
    {!isOpen? icon.classList.replace('fa-bars','fa-x'): icon.classList.replace("fa-x","fa-bars")}
    setTimeout(() => {
        icon.style.transform ="rotate(0deg)";
    }, 200);
    setTimeout(() => {
        icon.style.filter ="blur(0px)";
    }, 400);
}

 useEffect(() => {
    HandleOpen();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

// Change le theme de la page.

      
    return (
            <nav className={`header-wrapper ${theme === "dark"? "light": "dark"}`} id="home_header">
                <div className="header-left">
                    <div className={`header-name`}> 
                        <NavLink 
                            path="/" 
                            onClick={()=> {
                                scroll.scrollToTop();
                        
                            }}
                            className={theme === "dark"? "light": "dark"}

                        >
                            Pierre
                        </NavLink>
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
                                    className={`header-link accueil`}
                                    to={"/"}
                                    onClick={()=> {
                                        scroll.scrollToTop();
                                
                                    }}
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li`} >
                                <Link
                                    activeClass="active"
                                    spy={true} 
                                    smooth={true} 
                                    to="home_expertise"
                                    className={`header-link`}

                                >
                                    Expertise
                                </Link>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li`} >
                                <Link
                                    activeClass="active"
                                    spy={true} 
                                    smooth={true} 
                                    to="home_projets"
                                    className={`header-link  `}

                                >
                                    Projets
                                </Link>
                            </li>
                            <div className={`header-barre `}/>
                            <li className={`header-liste-li`} >
                            <Link
                                    activeClass="active"
                                    spy={true} 
                                    smooth={true} 
                                    to="home_experiences"
                                    className={`header-link  `}

                                >
                                    Expériences
                                </Link>
                            </li>
                        </ul>
                        <div className="header-buttons-container">
                            <Link 
                                spy={true}
                                smooth={true}
                                to="contact_lien-form"
                                className={`button header-button `}
                            >
                                Me contacter
                            </Link>
                            <span onClick={handleThemeChange}>{theme === "dark" ? (<i className="fa-solid fa-sun"/>): (<i className="fa-solid fa-moon"/>)}</span>
                        </div>
                </div>
            </nav>
    );
};

export default Header;
