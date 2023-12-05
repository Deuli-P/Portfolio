/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars

import { useEffect, useState,useContext } from 'react';
import ExpertiseCard from '../components/Expertise/ExpertiseCard/ExpertiseCard';
import ExpertiseCollapse from '../components/Expertise/ExpertiseCollapse/ExpertiseCollapse';
import photo from '../../public/pictures/images/pierre-antoniutti-converti.webp';
// import ScrollToUp from '../components/ChevronToUp/scrollToUp';
import ThemeContext from '../Context/ThemeContext';
import WorkCard from '../components/Work/workCard/workCard';
import Filter from '../components/Work/Filter/Filter';
import ExperienceCollapse from '../components/Experience/ExperienceCollapse/ExperienceCollapse';
import Avis from '../components/Contact/Avis/Avis';
import Form from '../components/Contact/Form/Form';
import Personnal from '../components/Work/Personnal/Personnal';
import Presentation from '../components/Presentation/Presentation';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

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
        <main id='main-home'>
            <section id='home_presentation' className={theme === "dark" ? "light": "dark"}>
               <Presentation photo={photo}/>
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
                                    key={`projet_${item.id}`} 
                                    id={item.id}
                                    href={`/project/${item.id}`}
                                    className="work_projets-link"
                                >
                                    <WorkCard
                                        name={item.name}
                                        image={item.image}
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur id dolores minus perferendis esse, eos necessitatibus similique et. Minima, voluptates nihil eius officiis doloribus repudiandae nostrum inventore mollitia rerum!</p>
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