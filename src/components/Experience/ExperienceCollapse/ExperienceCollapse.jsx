//eslint-disable-next-line
const ExperienceCollapse = ({theme,name,job,url,description,startDate,endDate,location,onToggle,logo,id,technologies,isOpen}) => {

    return (
        <article className={`experience_collapse_article-container `}>
            <div 
                className={`experience_collapse_top-container ${theme === "dark" ? "experience-bg-top-light":"experience-bg-top-dark"}`}
                onClick={onToggle}
            >
                <div className={`experience_collapse__top-title ${theme === "dark" ? "":""}`}>
                    <h4 className={`experience_collapse__top-h4 ${theme === "dark" ? "h4-light-color":"h4-dark-color"}`}>
                        <span>{job}</span>
                        <strong className='experise_collapse_top_at'>@</strong>
                        <span>{name}</span>
                    </h4>
                </div>
                <div className={`experience_collapse__top-date ${theme === "dark" ? "":""}`}>
                    <h4 className={`experience_collapse__top-h4 ${theme === "dark" ? "h4-light-color":"h4-dark-color"}`}>
                        {startDate}
                         - 
                        {endDate}
                    </h4>
                </div>
                <div className={`experience_collapse__top-chevron ${theme === "dark" ? "h4-light-color":"h4-dark-color"}`}>
                    <span>{isOpen? "-": "+"}</span>
                </div>
            </div>
            {isOpen && (
                <div className={`experience_collapse_bot-container ${theme === "dark" ? "experience-bg-bot-light":"experience-bg-bot-dark"}`}>
                    <img 
                        className={`experience_collapse_bot-logo ${theme === "dark" ? "":""}`} 
                        alt={`Logo ${name}`}
                        src={logo}/>
                        <div className={`experience_collapse_logo-content ${theme === "dark" ? "":""}`}></div>
                    <div className={`experience_collapse_bot_content-container ${theme === "dark" ? "":""}`}>
                        <div className={`experience_collapse_bot-url-location ${theme === "dark" ? "":""}`}>
                            <div className={`experience_collapse_bot-location ${theme === "dark" ? "p1-light-color":"p1-dark-color"}`}>
                                <i className={`fa-solid fa-location-dot ${theme === "dark" ? "":""}`}></i>
                                <span>{location}</span>
                            </div>
                            <div className={`experience_collapse_bot-url ${theme === "dark" ? "p1-light-color":"p1-dark-color"}`}>
                                <i className={`fa-solid fa-square-arrow-up-right ${theme === "dark" ? "":""}`}/>
                                <span>{url}</span>
                            </div>
                        </div>
                        <div className={`experience_collapse_bot-text-techno ${theme === "dark" ? "p1-light-color":"p1-dark-color"}`}>
                            <p>{description}</p>
                            <div className={`experience_collapse_bot-techno ${theme === "dark" ? "p1-light-color":"p1-dark-color"}`}>
                                {/* eslint-disable-next-line */}
                                {technologies.map((item, idx) => (
                                    <div 
                                        key={idx}
                                        className={`experience_collapse_bot_techno-element ${theme === "dark" ? "": ""}`}
                                        >
                                            {item}
                                        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

export default ExperienceCollapse;