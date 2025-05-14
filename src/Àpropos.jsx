
import react from "react";
import { easeInOut, easeOut, motion } from 'framer-motion';
export default function apropo(){

   
    return(
        <div className="Propo">

<section id="section_propo">
      <motion.h2 
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        delay:1,
        duration:2.5,
        ease:easeInOut
        
      }}
      >Notre Équipe</motion.h2>

      <motion.div className="info_equipe" 
       initial={{
        opacity:0,
        x:"-15vw"
       
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        delay:0.2,
        duration:2,
        ease:easeInOut
        
      }}
      >
        <h5>Team Leader</h5>
        <p>
          Responsable de coordonner les activités du club, diriger les réunions et motiver les membres.
          Supervise les autres membres du bureau et facilite la communication.
        </p>
      </motion.div>

      <motion.div className="info_equipe"    
      initial={{
        opacity:0,
        y:"-5vh"
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        delay:0.2,
        duration:2,
        ease:easeInOut
        
      }}>
        <h5>Vice Team Leader</h5>
        <p>Assiste le chef d'équipe, le remplace en son absence et prend en charge des projets spécifiques.</p>
      </motion.div>

      <motion.div className="info_equipe" 
      initial={{
        opacity:0,
        
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        delay:0.2,
        duration:2,
        ease:easeInOut
        
      }}
      >
        <h5>Secrétaire</h5>
        <p>
          Gère les notes des réunions, rédige les documents administratifs et assure la communication interne du club.
        </p>
      </motion.div>

      <motion.div className="info_equipe" 
           initial={{
            opacity:0,
            x:"-15vw"
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            delay:0.2,
            duration:2.4,
            ease:easeInOut
            
          }}
      >
        <h5>Communication & Médias</h5>
        <p>
          Promeut les activités du club, gère les réseaux sociaux, crée du contenu et coordonne les campagnes de communication.
        </p>
      </motion.div>

      <motion.div className="info_equipe" 
       initial={{
        opacity:0,
        y:"5vh"
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        delay:0.2,
        duration:2,
        ease:easeInOut
        
      }}
      >
        <h5>Trésorier</h5>
        <p>Gère les finances du club, tient les registres financiers et prépare les rapports budgétaires.</p>
      </motion.div>

      <div className="club_Objectifs">
        <motion.h2 
           initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2.1,
            ease:easeInOut
            
          }}
        >Nos Objectifs</motion.h2>

        <motion.details 
         initial={{
            x:"-8vw"
          }}
          whileInView={{
            x:0
          }}
          transition={{
            delay:0.1,
            duration:2.2,
            ease:easeInOut
            
          }}
        > 

          <summary className="data1">Faire grandir la communauté :</summary>
          <p className="data1 p1">
            Accueillir de nouveaux membres, organiser des événements inclusifs et favoriser une ambiance chaleureuse.
          </p>
        </motion.details>

        <motion.details 
            initial={{
                x:"8vw"
              }}
              whileInView={{
                x:0
              }}
              transition={{
                delay:0.1,
                duration:2.3,
                ease:easeInOut
                
              }}
        > 
          <summary className="data1">Expérimenter et apprendre ensemble :</summary>
          <p className="data1 p1">
            Collaborer, essayer de nouvelles idées et partager des connaissances dans une ambiance de curiosité et de croissance.
          </p>
        </motion.details>

        {/* Suppression du doublon "Faire grandir la communauté" */}

        <motion.details 
          initial={{
            x:"-8vw"
          }}
          whileInView={{
            x:0
          }}
          transition={{
            delay:0.1,
            duration:2.4,
            ease:easeInOut
            
          }}
        >
          <summary className="data1">Favoriser l'innovation :</summary>
          <p className="data1 p1">
            Organiser des concours et mettre en place un "Mur de l'Innovation" pour collaborer sur des idées créatives.
          </p>
        </motion.details>

        <motion.details 
          initial={{
            x:"8vw"
          }}
          whileInView={{
            x:0
          }}
          transition={{
            delay:0.1,
            duration:2.5,
            ease:easeInOut
            
          }}
        >
          <summary className="data1">Établir des liens :</summary>
          <p className="data1 p1">
            Créer des soirées de réseautage et des événements pour connecter nos membres avec des professionnels de l'industrie.
          </p>
        </motion.details>

        <motion.details 
           initial={{
            x:"-8vw"
          }}
          whileInView={{
            x:0
          }}
          transition={{
            delay:0.1,
            duration:2.6,
            ease:easeInOut
            
          }}
        >
          <summary className="data1">Célébrer la diversité :</summary>
          <p className="data1 p1">
            Promouvoir l'inclusion grâce à des événements culturels et des initiatives qui mettent en lumière tous les talents.
          </p>
        </motion.details>
      </div>
    </section>
  

        </div>
    )
}