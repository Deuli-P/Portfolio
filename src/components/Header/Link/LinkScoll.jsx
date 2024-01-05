import { useLocation } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const LinkScoll = ({id,name}) => {

    const path = useLocation().pathname;

    const handleScroll = () => {
        if(path === "/"){
            // Scroll vers id element
            <Link to={`#${id}`} className='header-link'>
                {name}
            </Link>
        }
        else{
            // Rediriger vers home puis scroll vers id element
            <Link to={`/#${id}`} className='header-link'>
                {name}
            </Link>
        }
    }


    // on recup le locate.pathname 

    // Si home alors juste scroll vers id element
    // sinon rediriger vers home puis scroll vers id element
  return handleScroll();
    
  
}

export default LinkScoll
