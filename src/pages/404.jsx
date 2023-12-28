import useTheme from "../Context/ThemeContext";

const ErrorPage = () => {

    const { theme } = useTheme();

    return (
        <main className={theme === "dark" ? "light" : "dark"}>
            <h1>404</h1>
            <span>La page ${`n'`}existe pas</span>
        </main>
    );
};

export default ErrorPage;