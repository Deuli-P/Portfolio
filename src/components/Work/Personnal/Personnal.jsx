
const Personnal = () => {
    return (
        <div id='works_personnal_container'>
        <div id='works_personnal_text_container'>
            <h3 id='works_personnal_text_title' >
                Mes 
                {window.innerWidth >= 1024 ? <br/> : " "}
                Projets
            </h3>
            <p id='works_personnal_text_p' >
                Lorsque {`j'`}étais en train de me former en développement web front-end {`j'`}ai voulu {`m'`}essayer au développement mobile à travers une petite application de dialogue à partir {`d'`}images.
            </p>
        </div>
        <div id='works_personnal_content'>
            <div className={`work_personnal_content_text `}>
                <div className={`work_personnal_content_fleche `}>
                    <img src="../../public/pictures/images/fleche-dessin-main.png" alt="Flêche" />
                </div>
                <strong>Projet Principal</strong>
                <h5>Gépalémo</h5>
                <button 
                    onClick={() => {console.log("click sur Mobile");}}
                >
                    Voir Projet</button>
            </div>
            <div className="video3D">
            </div>
        </div>
    </div>
    );
};

export default Personnal;