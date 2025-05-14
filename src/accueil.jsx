import React ,{useEffect} from "react";
import logoDev from './image_Do1/logo_dev.jpg'
import { easeInOut, easeOut, motion } from 'framer-motion';

export default function Accueil() {
 

  return (
    <div className="AccuEil">
     
    
      <div className="right">
        <motion.h1 
            initial={{
                y:"-30vh"
            }}
            animate={{
               y:0
            }}
            transition={{
               
                duration:1,
                ease:easeOut
            }}
        >
          Bienvenue chez <span >DO1</span>
        </motion.h1>
        < motion.p 
          initial={{
            x:"-25vw"
        }}
        animate={{
           x:0

        }}
        transition={{
            delay:0.2,
            duration:1.3,
            ease:easeOut
        }}
        >
          Bienvenue sur la page officielle de <strong>DO1</strong> !<br />
          Nous sommes une communauté passionnée de développement <br /> web et mobile,
          fondée en septembre 2023 à l'ESTN.<br />
          Notre mission est de rassembler les esprits<br /> créatifs, d'encourager 
          l'innovation et de développer <br /> des compétences dans le domaine du génie
          logiciel.
        </motion.p>
      </div>
      <motion.div 
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1

        }}
        transition={{
            delay:0.5,
            duration:4,
            ease:easeInOut
        }}
       className="left">
        <img src={logoDev} alt="logo développeur"  />
      </motion.div>
    </div>

  );
}
