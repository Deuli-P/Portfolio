/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useEffect, useState, useContext} from 'react';
import ThemeContext from '../../../Context/ThemeContext';

const ExpertiseCollapse = ({icons,title, soustitle, paragraph,id}) => {

    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useContext(ThemeContext);


    const HandleOpen = () => {
        console.log("Collapse est fermé :", isOpen);
        setIsOpen(!isOpen);
    }


    return (
        <article className={`expertise_card ${theme === "dark" ? "expertise-border-light": "expertise-border-dark"}`} id={id}>
            <div 
                className={`expertise_card_top_container ${theme === "dark" ? "expertise-bg-collapse-top-light": "expertise-bg-collapse-top-dark"} ${isOpen ? "open" : ""}`} 
                onClick={HandleOpen}>
                <div className={`expertise_card_icon ${theme === "dark" ? "h3-light-color": "h3-dark-color"}`}>
                    <img src={icons} alt="Icon"/>
                </div>
                <div className="expertise_card_title_container" >
                        <h3 className={`expertise_card_title_h ${theme === "dark" ? "h3-light-color": "h3-dark-color"}`}>
                            <span className="expertise_card_title_span">
                                {title}
                            </span>
                            <br/>
                            {soustitle}
                        </h3>
                </div>
                 {/* L'element s'affiche en haut a droite du top container quand c'est ouvert pour montrer que c'est ouvert
                 Element en absolute et assez petit. */}
                 <span className={`expertise_card_collapse_- ${theme === "dark" ? "expertise-border-light": "expertise-border-dark"}`}>{isOpen ? "-" : "+" }</span>
            </div>
            {isOpen && (
                <div className={`expertise_card_bottom_container ${theme === "dark" ? "expertise-bg-bot-light": "expertise-bg-bot-dark"}`}>
                    <div className="expertise-card-description_container">
                    <div className={`expertise_card_description_content `}>
                            {paragraph}
                        </div>
                    </div>
                </div>
                )} 
        </article>
    );
};

export default ExpertiseCollapse;