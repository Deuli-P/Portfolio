import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { Link,  animateScroll as scroll } from 'react-scroll';
import ThemeContext from "../../Context/ThemeContext";

// Le header est toujours visible apres avoir passé le presentation.

// si la page n'est plus en haut alors un bouton apparait pour remonter en haut de page.
// DONE
// Lorsque l'on clique une lien d'une section cela active le lien correspondant.
// DONE
// Icon burger pour le menu responsive. 
// DONE

const Header = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);



    const handleThemeChange = () => {
        toggleTheme();
    };

const[isOpen, setIsOpen] = useState(false);

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
    console.log("header est fermé :", isOpen);
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
            <nav className={`header-wrapper ${theme === "dark"? "bg-header-light": "bg-header-dark"}`} id="home_header">
                <div className="header-left">
                    <div className={`header-name`}> 
                        <NavLink 
                            path="/" 
                            onClick={()=> {
                                scroll.scrollToTop();
                        
                            }}
                            className={theme === "dark"? "h1-light-color": "h1-dark-color"}

                        >
                            Pierre
                        </NavLink>
                    </div>
                        {windowWidth < 800? 
                        (
                            <div className="header-icons">
                                <i onClick={HandleOpen} className={` fa-solid fa-bars`}/> 
                            </div>
                        )
                        : null}
                </div>
                <div className={`header-right ${isOpen? "open": ""} ${theme === "dark"? "bg-header-light": "bg-header-dark"}`}>
                    <ul className="header-list">
                            <li>
                                <NavLink
                                    className={`header-link ${theme === "dark"? "h2-light-color": "h2-dark-color"}`}
                                    activeClass={`active ${theme === "dark"? "h2-light-color-active": "h2-dark-color-active"}`} 
                                    path="/"
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <div className={`header-barre ${theme === "dark"? "barre-header-light": "barre-header-dark"}`}/>
                            <li>
                                <Link
                                    activeClass="active"
                                    activeStyle={{color:`rgb(226, 147, 43)`}}
                                    spy={true} 
                                    smooth={true} 
                                    to="home_expertise"
                                    className={`header-link ${theme === "dark"? "h2-light-color": "h2-dark-color"}`}

                                >
                                    Expertise
                                </Link>
                            </li>
                            <div className={`header-barre ${theme === "dark"? "barre-header-light": "barre-header-dark"}`}/>
                            <li>
                                <Link
                                    activeClass="active"
                                    activeStyle={{color: 'rgb(226, 147, 43)'}}
                                    spy={true} 
                                    smooth={true} 
                                    to="home_projets"
                                    className={`header-link ${theme === "dark"? "h2-light-color": "h2-dark-color"}`}

                                >
                                    Projets
                                </Link>
                            </li>
                            <div className={`header-barre ${theme === "dark"? "barre-header-light": "barre-header-dark"}`}/>
                            <li>
                            <Link
                                    activeClass="active"
                                    activeStyle={{color: 'rgb(226, 147, 43)'}}
                                    spy={true} 
                                    smooth={true} 
                                    to="home_experiences"
                                    className={`header-link ${theme === "dark"? "h2-light-color": "h2-dark-color"}`}

                                >
                                    Expériences
                                </Link>
                            </li>
                        </ul>
                        <div className="header-buttons-container">
                            <Link 
                                spy={true}
                                smooth={true}
                                to="home_contact"
                                className={`button header-button ${theme === "dark"? "button-light": "button-dark"}`}
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
