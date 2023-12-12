
// eslint-disable-next-line
const Avis = ({theme, job, nom, prenom, commentaire, photo, entreprise, bgColor}) => {
    return (
        <article 
            className={`contact_avis_article-container ${theme === "dark"? "": ""}`}
            style={{"backgroundColor":bgColor}}
            >
            <div className={`contact_avis_top-container ${theme === "dark"? "": ""}`}>
                <img 
                    className={`contact_avis_top-guillemet white-icons ${theme === "dark"? "": ""}`}
                    src="../../../../public/pictures/icons/quote-icon.webp"
                    alt="Quote icon"
                />

                
                <img src={photo} alt={`Photo de ${nom} ${prenom}`} className={`contact_avis_top-photo ${theme === "dark"? "": ""}`}/>
            </div>
            <div className={`contact_avis_bot-container ${theme === "dark"? "": ""}`}>
                <p className={`contact_avis_bot-commentaire ${theme === "dark"? "": ""}`}>
                    {commentaire}
                </p>
                <span className={`contact_avis_bot-signature ${theme === "dark"? "": ""}`}>
                    <h6>- {prenom} {nom}</h6>
                    <p>{`${job} at ${entreprise}`}</p>
                </span>
            </div>
        </article>
    );
};

export default Avis;