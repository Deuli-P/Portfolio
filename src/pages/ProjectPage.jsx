import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import data from "../data/expertise.json"

const ProjectPage = () => {

    const { theme } = useContext(ThemeContext);

    const workData = data.works;
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const projetData = workData.find((item) => item.id === id);

    const handleHovered = () => {
        const icon = document.querySelector(".fa-arrow-right");
        icon.classList.add("hovered");
        console.log("Hovered");
    }
    const handleLeave = () => {
        const icon = document.querySelector(".fa-arrow-right");
        icon.classList.remove("hovered");
        console.log("Hovered");
    }


    
    useEffect(() => {
        console.log("[PAGE]données du projet :",projetData);
        if(!projetData){
            setIsLoading(true);
        }
        else{
            setIsLoading(false);
        }
    },[projetData]);
    
    const dataLoad = () => {
        // Utilisez la déstructuration pour obtenir les différentes informations du projet
        const { name, designer, description, reseau, pictures, support, github} = projetData;
        
        console.log("[PAGE]images :",pictures.projet);

        const renderView = (
            <main id="main-projet" className={theme === "dark"? "light": "dark"}>
                <section className="projectPage_title-container">
                    <div className="projetPage_title-backButton">
                        <i className="fa-solid fa-arrow-left" onClick={history.back()}/>
                    </div>
                    <div className="projetPage_title-title">
                        <span>{`//`} {support}</span>
                        <h1>{name}</h1>
                    </div>
                </section>
                <section className="projetPage_chemin">
                    <span onClick={()=> navigate("/")}>Home {'>'}</span>
                    <span>Portfolio {'>'} </span>
                    <span>{name}</span>
                </section>
                <section className="projetPage_description-container">
                    <div className="projetPage_description-text">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="projetPage_description-designer">
                        <div className="projetPage_description_designer_fiche-container">
                            {designer?.map((item, idx) => (  
                                <div 
                                    className="projetPage_description_designer-fiche "
                                    key={item.categorie+idx}
                                    >
                                    <div className="projetPage_description_designer_fiche-content">
                                        <span>{item.categorie}</span>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="projetPage_description_designer-fiche projetPage_description_designer-openProjet">
                            <a 
                                href={github} 
                                className="projetPage_description_designer_openProjet-a"
                                onMouseEnter={handleHovered}
                                onMouseLeave={handleLeave}
                            >
                                Ouvrir projet
                                <i className={`fa-solid fa-arrow-right`}/>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="projetPage_media-container">
                    <div className="projetPage_media_RS">
                        {reseau?.map((item, idx) => (
                        <a  target={`_blank`}
                            href={item.lien}
                            className="projetPage_media_RS-a"
                            key={item.nom + idx}>
                                <i  className={`fa-brands  projetPage_media_RS-i ${item.icon}`}/>
                        </a>
                            ))}
                    </div>
                    <div className="projetPage_media-content">
                            <img src={pictures.presentation} alt={` projection de ${name}`} />
                    </div>
                    {/* Pour chaque  */}
                        {pictures?.projet.map((item, idx) => (
                            <div className="projetPage_media-content" key={`item_img`+idx}>
                                {item.map((image, idx) => (
                                    <img 
                                        src={image.image} 
                                        alt={image.alt}
                                        key={`image_img`+idx}
                                    />
                                ))}
                            </div>
                        ))}
                </section>
            </main>
        );
        return (
            <>
            {renderView}
            </>
        );
    }

    return (
        <>
            {isLoading ? (<h1>Chargement...</h1>) : (dataLoad())}
        </>
        );
};

export default ProjectPage;