
// eslint-disable-next-line
const Avis = ({theme, job, nom, prenom, commentaire, photo, entreprise, bgColor}) => {
    return (
        <article 
            className={`contact_avis_article-container `}
            style={{"backgroundColor":bgColor}}
            >
            <div className={`contact_avis_top-container `}>
                <img 
                    className={`contact_avis_top-guillemet white-icons`}
                    src="/pictures/icons/quote-icon.webp"
                    alt="Quote icon"
                />
                <img src={photo} alt={`Photo de ${nom} ${prenom}`} className={`contact_avis_top-photo`} loading="lazy"/>
            </div>
            <div className={`contact_avis_bot-container`}>
                <p className={`contact_avis_bot-commentaire `}>
                    {commentaire}
                </p>
                <span className={`contact_avis_bot-signature `}>
                    <h5>- {prenom} {nom}</h5>
                    <p>{`${job} at ${entreprise}`}</p>
                </span>
            </div>
        </article>
    );
};

export default Avis;