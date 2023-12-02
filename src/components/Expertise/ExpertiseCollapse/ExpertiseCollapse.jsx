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
        <article className={`expertise_card-article expertise-collapse`} id={id}>
            <div 
                className={`expertise_card_top_container  ${isOpen ? "open" : ""}`} 
                onClick={HandleOpen}>
                <div className={`expertise_card_icon `}>
                    <img src={icons} alt="Icon"/>
                </div>
                <div className="expertise_card_title_container" >
                        <h3 className={`expertise_card_title_h `}>
                            <span className="expertise_card_title_span">
                                {title}
                            </span>
                            <br/>
                            {soustitle}
                        </h3>
                </div>
                 {/* L'element s'affiche en haut a droite du top container quand c'est ouvert pour montrer que c'est ouvert
                 Element en absolute et assez petit. */}
                 <span className={`expertise_card_collapse_chevron`}>{isOpen ? "-" : "+" }</span>
            </div>
            {isOpen && (
                <div className={`expertise_card_bottom_container `}>
                    <div className="expertise-card-description_container">
                    <div className={`expertise_card_description_content `}>
                        <p className={``}> {paragraph}</p>
                    </div>
                    </div>
                </div>
                )} 
        </article>
    );
};

export default ExpertiseCollapse;