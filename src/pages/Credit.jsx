import useTheme from "../Context/ThemeContext";


const CreditPage = () => {

    const { theme } = useTheme();

    return (
        <main id='credit-main' className={theme === "dark" ? "light" : "dark"}>
            <h2>Site portfolio de</h2>
            <h1>Pierre Antoniutti</h1>
                <div className='creditPage_lien-container'>
                    <h3>Liens</h3>
                    <a href="https://www.flaticon.com/free-icons/quotation-mark" title="quotation mark icons">Quotation mark icons created by Muhamad Ulum - Flaticon</a>

                    <a href="https://www.flaticon.com/fr/icones-gratuites/emplacement" title="emplacement icônes">Emplacement icônes créées par Good Ware - Flaticon</a>

                    <a href="https://www.flaticon.com/fr/icones-gratuites/code" title="code icônes">Code icônes créées par Linector - Flaticon</a>

                    <a href="https://www.flaticon.com/fr/icones-gratuites/code" title="code icônes">Code icônes créées par Linector - Flaticon</a>
                                
                </div>
        </main>
    );
};

export default CreditPage;