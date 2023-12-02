
const Personnal = () => {
    return (
        <div id='works_personnal_container'>
        <div id='works_personnal_text_container'>
            <h3 id='works_personnal_text_title' >
                My 
                {window.innerWidth >= 1024 ? <br/> : " "}
                work
            </h3>
            <p id='works_personnal_text_p' >
                Lorsque j'étais entrain de me former en developpeement web front-end j'ai voulu m'essayer au développement mobile à travers une petite application de dialogue à partir d'image.
            </p>
        </div>
        <div id='works_personnal_content'>
            <div className={`work_personnal_content_text `}>
                <div className={`work_personnal_content_fleche `}>
                    <img src="../../public/pictures/images/fleche-dessin-main.png" alt="Flêche" />
                </div>
                <strong>Featured project</strong>
                <h5>Gépalémo</h5>
                <button 
                    onClick={() => {console.log("click sur Mobile");}}
                >
                    View Project</button>
            </div>
            <div className="video3D">
            </div>
        </div>
    </div>
    );
};

export default Personnal;