// eslint-disable-next-line react/prop-types
const Presentation = ({photo}) => {
    return (
        <>
             <img src={photo} alt="Pierre Antoniutti" rel="preload"/>
                <div className={`home-title-container`}>
                    <h1 >Pierre Antoniutti</h1>
                    <h2>Frontend & mobile developper</h2>
                    <div></div>
                </div>
        </>
    );
};

export default Presentation;