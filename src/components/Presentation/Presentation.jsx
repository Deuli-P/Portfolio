// eslint-disable-next-line react/prop-types
const Presentation = ({photo}) => {
    return (
        <>
             <img src={photo} alt="Pierre Antoniutti" />
                <div className={`home-title-container`}>
                    <h1 >Pierre Antoniutti</h1>
                    <h2 >Frontend & mobile developper
                    <div ></div>
                    </h2>
                </div>
        </>
    );
};

export default Presentation;