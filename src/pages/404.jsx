import ThemeContext from "../Context/ThemeContext";
import {useContext} from 'react';

const ErrorPage = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <main className={theme === "dark" ? "light" : "dark"}>
            <h1>404</h1>
            <span>La page ${`n'`}existe pas</span>
        </main>
    );
};

export default ErrorPage;