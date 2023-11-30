/* eslint-disable react/prop-types */
//WorkCard.jsx
import{ useState } from 'react';

const WorkCard = ({image,name,supportDiffusion,theme}) => {

    const [MouseIn, setMouseIn] = useState(false);


    const HandleMoveIn =(e) => {
            setMouseIn(true);
            e.target.style.transform = "scale(1.1)";
    }
    const HandleMoveOut =(e) => {
            setMouseIn(false);
            e.target.style.transform = "scale(1)";

    }


    return (
        <article 
            className={`workCard_article_container ${ theme === "dark" ? 'bg-projet-light' : 'bg-projet-dark'}`}
            onMouseEnter={HandleMoveIn} 
            onMouseLeave={HandleMoveOut}
        >
            <div className={`workCard_image_container `}>
                <img src={image} 
                    alt="Project" 
                    className={
                            `workCard_image 
                            ${MouseIn ? 'project-scale' : ''}`
                            }
                        
                />
            </div>
            <div className={`workCard_text_container ${ theme === "dark" ? 'bg-projet-light' : 'bg-projet-dark'}`}>
                <h6 className={`wordCard_text_title ${ theme === "dark" ? 'p1-light-color' : 'p1-dark-color'}`}>{name}</h6>
                <p className={`wordCard_text_title ${ theme === "dark" ? 'p1-light-color' : 'p1-dark-color'}`}>{MouseIn ? ("Show project -") : (supportDiffusion) }</p> 
            </div>
        </article>
    );
};

export default WorkCard;