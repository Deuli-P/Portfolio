/* eslint-disable react/prop-types */
//WorkCard.jsx
import{ useState, useEffect } from 'react';

const WorkCard = ({image,name,supportDiffusion}) => {

    const [MouseIn, setMouseIn] = useState(false);

    useEffect(() => {
       
    }, [MouseIn]);

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
            className="workCard_article_container" 
            onMouseEnter={HandleMoveIn} 
            onMouseLeave={HandleMoveOut}
        >
            <div className="workCard_image_container">
                <img src={image} 
                    alt="Project" 
                    className={
                            `workCard_image 
                            ${MouseIn ? 'project-scale' : ''}`
                            }
                        
                />
            </div>
            <div className="workCard_text_container">
                <h6 className='wordCard_text_title'>{name}</h6>
                <p>{MouseIn ? ("Show project -") : (supportDiffusion) }</p> 
            </div>
        </article>
    );
};

export default WorkCard;