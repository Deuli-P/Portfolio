/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useContext} from "react";
import ThemeContext from '../../Context/ThemeContext';

// Card de presentation de mes compétences.
// Icon , titre , sous titre, paragraphe et decoration ::before/ ::after.
// Mobile = collapse? 

const ExpertiseCard = ({icons,title,soustitle,paragraph,id}) => {

    const { theme } = useContext(ThemeContext);
    // Si id est 1 alors ::after sera linear gradient pink

    // Si id est 2 alors ::after sera linear gradient blue

    // Si id est 3 alors ::after sera linear gradient green

    return (
        <article className={`expertise_card ${theme === "dark" ? "expertise-border-light": "expertise-border-dark"}`} id={id}>
            <div className={`expertise_card_top_container ${theme === "dark" ? "expertise-bg-card-top-light": "expertise-bg-card-top-dark"}`}>
                <div className={`expertise_card_icon ${theme === "dark" ? "h3-light-color": "h3-dark-color"}`}>
                    <img src={icons} alt="Icon"/>
                </div>
                <div className="expertise_card_title_container">
                        <h3 className={`expertise_card_title_h ${theme === "dark" ? "h3-light-color": "h3-dark-color"}`}>
                            <span className="expertise_card_title_span">
                                {title}
                            </span>
                            <br/>
                            {soustitle}
                        </h3>
                </div>
            </div>
            <div className={`expertise_card_bottom_container ${theme === "dark" ? "expertise-bg-bot-light": "expertise-bg-bot-light"}`}>
                <div className="expertise-card-description_container">
                    <div className={`expertise_card_description_content ${theme === "dark" ? "expertise-bg-bot-light": "expertise-bg-bot-light"}`}>
                        {paragraph}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ExpertiseCard;

