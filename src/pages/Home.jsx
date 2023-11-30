/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState,useContext } from 'react';
// EXPERTTISE
import ExpertiseCard from '../components/Expertise/ExpertiseCard/ExpertiseCard';
import ExpertiseCollapse from '../components/Expertise/ExpertiseCollapse/ExpertiseCollapse';
// PRESENTATION
import photo from '../../public/pictures/images/pierre-antoniutti-converti.webp';
// DATA
import jsonData from '../data/expertise.json';
// SCROLL TO UP BOUTON
import ScrollToUp from '../components/ChevronToUp/scrollToUp';
// DARK/LIGHT MODE
import ThemeContext from '../Context/ThemeContext';
//  WORKS
import WorkCard from '../components/Work/workCard/workCard';
import Filter from '../components/Work/Filter/Filter';
// EXPERIENCE
import ExperienceCollapse from '../components/Experience/ExperienceCollapse/ExperienceCollapse';
// CONTACT
import Avis from '../components/Contact/Avis/Avis';
import Form from '../components/Contact/Form/Form';

const HomePage = () => {
    const { theme } = useContext(ThemeContext);
    const expertiseData = jsonData.expertise;
    const entreprisesData = jsonData.entreprises;


    // eslint-disable-next-line no-unused-vars
    const [worksData, setObjects] = useState(jsonData.works); // Liste de tous les objets
    const [filteredWork, setFilteredWork] = useState([]); // Liste filtrée
    const [selectedType, setSelectedType] = useState("");
  const [isOpenCollapse, setIsOpenCollapse] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

    }, [windowWidth]);

    const FilterChange = (e) => {
        setSelectedType(e);
    }

    useEffect(() => {
        const firstfilteredWork = worksData.filter((item) => item.support === selectedType);
        if(firstfilteredWork.length === 0){
            setFilteredWork(null);
        }
        if (selectedType === "") {
            setFilteredWork(worksData);
        }
        else{
            setFilteredWork(worksData.filter((item) => item.support === selectedType));
        }

    }
    ,[selectedType,worksData]);

    const handleCollapseOpen = (id) => {
        setIsOpenCollapse(id === isOpenCollapse ? null : id);
    }

    return (
        <>
            <section id='home_presentation' className={theme === "dark" ? "bg-light-color": "bg-dark-color"}>
                <img src={photo} alt="Pierre Antoniutti" />
                <div className={`home-title-container`}>
                    <h1 className={theme ==='dark'? "h1-light-color":"h1-dark-color"}>Pierre Antoniutti</h1>
                    <h2 className={theme ==='dark'? "h2-light-color":"h2-dark-color"}>Frontend & mobile developper
                    <div className={`deco_presentation ${theme ==='dark'? "deco-light":"deco-dark"}`}></div>
                    </h2>
                </div>
            </section>
            <section id='home_expertise' className={theme === "dark" ? "bg-alt-light-color": "bg-alt-dark-color"}>
                <h3 id='expertise_title' className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>Expertise</h3>
                <div >
                    <div className="expertise_card_container">
                        {expertiseData.map((item, idx) => (
                            windowWidth >= 800 ? 
                                (
                                    <ExpertiseCard
                                    icons={item.icon}
                                    title={item.title}
                                    paragraph={item.paragraph}
                                    soustitle={item.soustitle}
                                    key={idx}
                                    id={item.id} 
                                    />
                                )
                                :
                                (
                                    <ExpertiseCollapse
                                    icons={item.icon}
                                    title={item.title}
                                    paragraph={item.paragraph}
                                    soustitle={item.soustitle}
                                    key={idx}
                                    id={item.id} 
                                    />
                                )
                            
                        ))}
                    </div>
                </div>
            </section>
            <section id='home_projets' className={theme === "dark" ? "bg-light-color": "bg-dark-color"}>
                <div id='works_personnal_container'>
                    <div id='works_personnal_text_container'>
                        <h3 id='works_personnal_text_title' className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>My work</h3>
                        <p id='works_personnal_text_p' className={theme === "dark" ? "p1-light-color": "p1-dark-color"}>
                            Lorsque j'étais entrain de me former en developpeement web front-end j'ai voulu m'essayer au développement mobile à travers une petite application de dialogue à partir d'image.
                        </p>
                    </div>
                    <div id='works_personnal_content' className={`${theme === "dark" ? "light": 'dark'}`}>
                        {/* Projet perso Gépalémo */}
                        <div className={`work_personnal_content_text ${theme === "dark" ? "light": 'dark'}`}>
                            <strong className={`${theme === "dark" ? "light": 'dark'}`}>Featured project</strong>
                            <div className={`work_personnal_content_fleche ${theme === "dark" ? "light": 'dark'}`}>
                                <img src="../../public/pictures/images/fleche-dessin-main.png" alt="Flêche" />
                            </div>
                            <button 
                                className={`${theme === "dark" ? "light": 'dark'}`}
                                onClick={() => {console.log("click sur Mobile");}}
                            >
                                View Project</button>
                        </div>
                        <div className="video3D">

                        </div>
                    </div>
                </div>
                <div id='works_projets_container'>
                    <Filter
                        FilterChange={FilterChange} 
                        theme={theme}
                        />
                    <div id="works_projets_list_container">
                            {filteredWork?.map((item, idx) => (
                                <WorkCard
                                name={item.name}
                                image={item.image}
                                key={idx}
                                supportDiffusion={item.support}
                                theme={theme}
                                />
                            ))}
                    </div>
                </div>
            </section>
            <section id='home_experiences' className={theme === "dark" ? "bg-alt-light-color": "bg-alt-dark-color"}>
                <h3 className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>Professionnal Expérience</h3>
                {entreprisesData.map((item, idx) => (
                    <ExperienceCollapse 
                        isOpen={isOpenCollapse === item.id}
                        key={idx}
                        theme={theme}
                        onToggle={()=>handleCollapseOpen(item.id)}
                        description={item.description}
                        name={item.name}
                        job={item.job}
                        location={item.localisation}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        url={item.website}
                        logo={item.logo}
                        id={item.id}
                        technologies={item.technologies}
                    />
                    ))}
            </section>
            <section id="home_contact" className={theme === "dark" ? "bg-light-color": "bg-dark-color"}>
                        <div id="contact-zone">
                            <div id="contact-title">
                                <h5 className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>Disponible pour projet professionnel.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur id dolores minus perferendis esse, eos necessitatibus similique et. Minima, voluptates nihil eius officiis doloribus repudiandae nostrum inventore mollitia rerum!</p>
                            </div>
                            <div id='contact-lien'>
                                <div className="contact_lien-container">
                                    <a 
                                        href="https://www.linkedin.com/in/pierre-antoniutti-a05b15111/"
                                        className={`button ${theme === "dark" ? "button-light": "button-dark"}`}
                                    >LinkedIn</a>
                                    <a 
                                        href="https://github.com/Deuli-P"
                                        className={`button ${theme === "dark" ? "button-light": "button-dark"}`}
                                    >Github</a>
                                </div>
                                <div className="contact_lien-form">
                                    <h4 
                                        className={`contact-lien_form-title ${theme === "dark" ? "h3-light-color": "h3-dark-color"}`}
                                    >Contactez moi</h4>
                                < Form theme={theme}/>
                                </div>
                            </div>
                        </div>
                        <div id="contact-avis">
                            {entreprisesData.map((item, idx) => (
                                <Avis 
                                    key={idx}
                                    entreprise={item.name}
                                    nom={item.avis.name}
                                    prenom={item.avis.surname}
                                    commentaire={item.avis.comment}
                                    job={item.avis.job}
                                    photo={item.avis.picture}
                                    theme={theme}
                                    bgColor={item.avis.BGColor}
                                />
                                ))}
                        </div>
            </section>
        </>
    );
};

export default HomePage;