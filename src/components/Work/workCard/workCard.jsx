/* eslint-disable react/prop-types */
//WorkCard.jsx
import{ useState } from 'react';
import "./WorkCard.scss";


const WorkCard = ({cover,alt,name,supportDiffusion}) => {

    const [MouseIn, setMouseIn] = useState(false);




    return (
        <article 
            className={`workCard_article_container `}
            onMouseEnter={()=>setMouseIn(true)} 
            onMouseLeave={()=>setMouseIn(false)}
        >
            <div className={`workCard_image_container `}>
                <img src={cover} 
                    alt={alt} 
                    className={
                            `workCard_image 
                            ${MouseIn ? 'hover' :''}`
                            }
                    loading='lazy'
                />
            </div>
            <div className={`workCard_text_container`}>
                <h5 className={`wordCard_text_title`}>{name}</h5>
                <div className="work_text_show">
                    <span style={{"opacity":0}}>i</span>
                    <p className={`wordCard_text_title ${MouseIn ? "hover" : "" }`}>{supportDiffusion}</p> 
                    <p className={`wordCard_text_title ${MouseIn ? "" : "hover" }`}>Afficher projet -</p> 
                </div>
            </div>
        </article>
    );
};

export default WorkCard;