
//eslint-disable-next-line
const ExperienceCollapse = ({theme,name,job,url,description,startDate,endDate,location,onToggle,logo,id,technologies,isOpen}) => {

    return (
        <article 
            className={`experience_collapse_article-container`}>
            <div 
                className={`
                    experience_collapse_top-container 
                    ${isOpen ? "open" : ""}
                `}
                onClick={onToggle}
            >
                <div className={`experience_collapse__top-title`}>
                    <h4 className={`experience_collapse__top-h4 `}>
                        <span>{job}</span>
                        <strong className='experise_collapse_top_at'>@</strong>
                        <span>{name}</span>
                    </h4>
                </div>
                <div className={`experience_collapse__top-date `}>
                    <h4 className={`experience_collapse__top-h4 `}>
                        {startDate}
                         - 
                        {endDate}
                    </h4>
                </div>
                <div className={`experience_collapse__top-chevron `}>
                    <span>{isOpen? "-": "+"}</span>
                </div>
            </div>
            {isOpen && (
                <div className={`experience_collapse_bot-container `}>
                    <img 
                        className={`experience_collapse_bot-logo `} 
                        alt={`Logo ${name}`}
                        src={logo}/>
                        <div className={`experience_collapse_logo-content `}></div>
                    <div className={`experience_collapse_bot_content-container `}>
                        <div className={`experience_collapse_bot-url-location `}>
                            <div className={`experience_collapse_bot-location `}>
                                <i className={`fa-solid fa-location-dot `}></i>
                                <span>{location}</span>
                            </div>
                            <div className={`experience_collapse_bot-url`}>
                                <i className={`fa-solid fa-square-arrow-up-right`}/>
                                <span>{url}</span>
                            </div>
                        </div>
                        <div className={`experience_collapse_bot-text-techno `}>
                            <p>{description}</p>
                            <div className={`experience_collapse_bot-techno `}>
                                {/* eslint-disable-next-line */}
                                {technologies.map((item, idx) => (
                                    <div 
                                        key={idx}
                                        className={`experience_collapse_bot_techno-element `}
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