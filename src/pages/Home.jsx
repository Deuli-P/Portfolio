/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState,useContext } from 'react';
import ExpertiseCard from '../components/ExpertiseCard/ExpertiseCard';
import photo from '../../public/pictures/images/pierre-antoniutti-converti.webp';
import WorkCard from '../components/workCard/workCard';
import jsonData from '../data/expertise.json';
import ScrollToUp from '../components/ChevronToUp/scrollToUp';
import ExpertiseCollapse from '../components/ExpertiseCollapse/ExpertiseCollapse';
import ThemeContext from '../Context/ThemeContext';

const HomePage = () => {
    const { theme } = useContext(ThemeContext);
    const expertiseData = jsonData.expertise;

    const worksData = jsonData.works;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

    }, [windowWidth]);

 //   const entrepriseData = jsonData.entreprises;

    // const [commentaireData, setCommentaireData] = useState([]);

    // useEffect(() => {
    //     const allCommentaires = entrepriseData.flatMap(item => item.avis);
    //     setCommentaireData(allCommentaires);
    // }, [entrepriseData]);



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
                <div id='expertiseCard_container'>
                    {expertiseData.map((item, idx) => (
                        windowWidth >800 ? 
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
            </section>
            <section id='home_projets' className={theme === "dark" ? "bg-light-color": "bg-dark-color"}>
                <div id='works_personnal_container'>
                    <div id='works_personnal_text_container'>
                        <h3 id='works_personnal_text_title' className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>My work</h3>
                        <p id='works_personnal_text_p'>
                            Lorsque j'etais entrain de me former en developpeement web front-end j'ai voulu m'essayer au développement mobile a travers une petite application de dialogue a partir d'image.
                        </p>
                    </div>
                    <div id='works_personnal_content'>
                        {/* Projet perso Gépalémo */}
                        <div className="work_personnal_content_text">
                            <h6>Featured project</h6>
                            <button>View Project</button>
                        </div>
                        <div className="video3D">

                        </div>
                        
                    </div>
                </div>
                <div id='works_projets_container'>
                    <div id="works_projets_fitler-container">
                        {/* Filtre des type de projet ( Web dev , Mobile, Gestion) */}
                        <span> Filtrer par </span>

                    </div>
                    <div id="works_projets_list_container">
                    {worksData.map((item, idx) => (
                            <WorkCard
                                name={item.name}
                                image={item.image}
                                key={idx}
                                supportDiffusion={item.support}
                            />
                        ))}
                        {/* Liste des projets fait */}
                    </div>
                </div>
            </section>
            <section id='home_experiences' className={theme === "dark" ? "bg-alt-light-color": "bg-alt-dark-color"}>
                <h3 className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>Professionnal Expérience</h3>
                {/* Components Collpase avec taf */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, <br/> porro dolorem repellendus ullam culpa ipsa quam ea, non ut odio officia quo ratione voluptatum  illo eos! <br/>  Ab, fugiat? Pariatur, magni!
                Vero ea numquam optio et reiciendis expedita autem rerum? Quo  <br/> voluptas minima impedit perspiciatis excepturi suscipit labore, error cumque praesentium,  <br/> consequuntur vitae soluta fugit? Assumenda nostrum explicabo inventore amet unde.
            </section>
            <section id="home_contact" className={theme === "dark" ? "bg-light-color": "bg-dark-color"}>
                        <div id="contact-zone">
                            <div id="contact-title">
                            <h5 className={theme === "dark" ? "h3-light-color": "h3-dark-color"}>Disponible pour projet professionnel.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur id dolores minus perferendis esse, eos necessitatibus similique et. Minima, voluptates nihil eius officiis doloribus repudiandae nostrum inventore mollitia rerum!</p>
                            </div>
                            <div id='contact-lien'>
                                {/* Email, numéro, LinkedIn, lien Freelance profile, Github */}
                                <a id='contact-email' href='mailto:pierre.antoniutti@gmail.com'>pierre.antoniutti@gmail.com</a>
                                <a href="https://www.linkedin.com/in/pierre-antoniutti-a05b15111/">LinkedIn</a>
                                <a href="https://github.com/Deuli-P">Github</a>
                            </div>
                        </div>
                        <div id="contact-avis">
                                {/* Avis d'ancien client ou chef*/}
                        </div>
            </section>
            <ScrollToUp />
        </>
    );
};

export default HomePage;