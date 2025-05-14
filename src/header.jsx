
import react,{useState} from "react";
import { easeInOut, easeOut, motion } from 'framer-motion';
import logo_club from './image_Do1/logo.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
const Header=()=>{
     const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(prev => !prev);
  };
    
  

  return(
    <div>
 <header>
        

        <div className="burger" >
        
          <button onClick={toggleMenu}>&#9776;</button>
        </div>
       <div className="heAder">
       <motion.div className="logo_club"  >
          <img src={logo_club} alt="logo_club" />
        </motion.div>
      <nav>
      <ul className="menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/activite">Activités</Link></li>
        <li><Link to="/Projets">Projets</Link></li>
        <li><Link to="/Membres">Membres</Link></li>
        <li><Link to="/contact" className="contact">Contact</Link></li>
      </ul>
    </nav>
       </div>
      </header>

    </div>
  )}
export default Header;