import { useContext } from 'react';
import { Link } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";

const Footer = () => {
    
    const { theme } = useContext(ThemeContext);

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