/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
// home.jsx
import { useEffect, useState,useContext } from 'react';
import ExpertiseCard from '../components/Expertise/ExpertiseCard/ExpertiseCard';
import ExpertiseCollapse from '../components/Expertise/ExpertiseCollapse/ExpertiseCollapse';
import ThemeContext from '../Context/ThemeContext';
import WorkCard from '../components/Work/workCard/workCard';
import Filter from '../components/Work/Filter/Filter';
import ExperienceCollapse from '../components/Experience/ExperienceCollapse/ExperienceCollapse';
import Avis from '../components/Contact/Avis/Avis';
import Form from '../components/Contact/Form/Form';
import Personnal from '../components/Work/Personnal/Personnal';
import Presentation from '../components/Presentation/Presentation';
import { Link } from 'react-router-dom';

const HomePage = ({data}) => {
    const { theme } = useContext(ThemeContext);
    const expertiseData = data.expertise;
    const entreprisesData = data.entreprises;
    const worksData =data.works;


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
        <main id='main-home' className={theme === "dark" ? "light": "dark"}>
            <section id='home_presentation' className={theme === "dark" ? "light": "dark"}>
               <Presentation/>
            </section>
            <section id='home_expertise' className={theme === "dark" ? "light": "dark"}>
                <h3 id='expertise_title'>Expertise</h3>
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
                                color={item.color}
                                alt={item.alt}
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
                                alt={item.alt}
                                />
                            )
                        
                    ))}
                </div>
            </section>
            <section id='home_projets' className={theme === "dark" ? "light": "dark"}>
                <Personnal/>
                <div id='works_projets_container'>
                    <Filter
                        FilterChange={FilterChange} 
                        />
                    <div id="works_projets_list_container">
                            {filteredWork?.map((item) => (
                                <Link
                                    id={item.id}
                                    to={`/project/${item.id}`}
                                    className="work_projets-link"
                                    key={`projet_${item.id}`} 
                                >
                                    <WorkCard
                                        name={item.name}
                                        cover={item.cover}
                                        alt={item.alt}
                                        supportDiffusion={item.support}
                                    />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
            <section id='home_experiences' className={theme === "dark" ? "light": "dark"}>
                <h3>Professionnal Expérience</h3>
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
            <section id="home_contact" className={theme === "dark" ? "light": "dark"}>
                        <div id="contact-zone">
                            <div id="contact-title">
                                <h5 >Disponible pour projet professionnel.</h5>
                                <p>
                                    Vous avez un projet passionnant pour lequel vous avez besoin d'aide ?
                                    <br/>
                                    Envoyez-moi un email ou contactez-moi par message instantané!</p>
                            </div>
                            <div id='contact-lien'>
                                <div className="contact_lien-container">
                                    <a 
                                        href="https://www.linkedin.com/in/pierre-antoniutti-a05b15111/"
                                    >LinkedIn</a>
                                    <a 
                                        href="https://github.com/Deuli-P"
                                    >Github</a>
                                </div>
                                <div id="contact_lien-form">
                                    <h4 
                                        className={`contact-lien_form-title ${theme === "dark" ? "dark": "light"}`}
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
        </main>
    );
};

export default HomePage;