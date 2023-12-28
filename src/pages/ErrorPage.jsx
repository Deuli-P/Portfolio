/* eslint-disable react/no-unescaped-entities */
import useTheme from '../Context/ThemeContext';

const ErrorPage = () => {

    const { theme } = useTheme;

    return (
        <main id='errorPage_main' className={theme === "dark" ? "light" : "dark"}>
            <h1 id='errorPage_title'>404</h1>
            <span id='errorPage_span'>La page n'existe pas</span>
            <a href={"/"}> Retour à l'accueil</a>
        </main>
    );
};

export default ErrorPage;