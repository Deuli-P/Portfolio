import { Link } from "react-router-dom";
import useTheme from "../../Context/ThemeContext";

const Footer = () => {
    
    const { theme } = useTheme();

    return (
        <footer className={theme === "dark"? "light": "dark"}>
            <div id="footer_container">
                <Link to={"/credits"} className="footer_link">Credit Page</Link>
                <span>Product par Pierre Antoniutti</span>
            </div>
        </footer>
    );
};

export default Footer;