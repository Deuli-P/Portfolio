import './Burger.scss';

// eslint-disable-next-line react/prop-types
const Burger = ({isOpen, HandleOpen}) => {

    return (
        <div 
            className={`menu_burger-container ${isOpen? 'nav-open': ""}`}
            onClick={HandleOpen}
        >
            <a id="menu-toggle" className="menu_burger-toggle">
                <span className="menu-toggle-bar menu-toggle-bar--top"/>
                <span className="menu-toggle-bar menu-toggle-bar--middle"/>
                <span className="menu-toggle-bar menu-toggle-bar--bottom"/>
            </a>
        </div>
    );
};

export default Burger;