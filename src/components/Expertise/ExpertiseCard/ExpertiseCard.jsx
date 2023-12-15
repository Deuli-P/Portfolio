/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useContext} from "react";
import ThemeContext from '../../../Context/ThemeContext';
// Card de presentation de mes compétences.
// Icon , titre , sous titre, paragraphe et decoration ::before/ ::after.
// Mobile = collapse? 

const ExpertiseCard = ({icons,title,soustitle,paragraph,id,alt}) => {


    const { theme } = useContext(ThemeContext);



    return (
        <article className={`expertise_card-article expertise-card`} id={id}>
            <div className={`expertise_card_top_container `}>
                <div className={`expertise_card_icon `}>
                    <img src={icons} alt={alt}/>
                </div>
                <div className="expertise_card_title_container">
                        <h3 className={`expertise_card_title_h `}>
                            <span className={`expertise_card_title_span `}>
                                {title}
                            </span>
                            <br/>
                            {soustitle}
                        </h3>
                </div>
            </div>
            <div className={`expertise_card_bottom_container `}>
                <div className="expertise-card-description_container">
                    <div className={`expertise_card_description_content `}>
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ExpertiseCard;

