
import react from "react";
import do1_image_web from './image_Do1/do1_image_web.png'
import do1_image_j_projet from './image_Do1/do1_image_j_projet.png'
import do1_image_dev_mobile from './image_Do1/do1_image_dev_mobile.png'
import do1_image_java from './image_Do1/do1_image_java.png'
import do1_image_NET from './image_Do1/do1_image_NET.png'
import do1_image_reseaux from './image_Do1/do1_image_reseaux.png'
 export default function Activite(){

    return(
        <div className="ActIvite">

    <section id="section_activité">
      <h5>Nos Activités</h5>

      <div className="activité1">
        <img src={do1_image_web} alt="projet web" />
        <h2>Web 3.0</h2>
        <p>Atelier interactif explorant les technologies du futur, les applications décentralisées.</p>
      </div>

      <div className="activité1">
        <img src={do1_image_j_projet} alt="gestion de projet" />
        <h2>Gestion de projets</h2>
        <p>Conférence sur les bonnes pratiques et outils pour gérer efficacement les projets informatiques.</p>
      </div>

      <div className="activité1">
        <img src={do1_image_dev_mobile} alt="developpement mobile" />
        <h2>Développement mobile</h2>
        <p>Atelier pratique pour créer des applications mobiles intuitives et performantes.</p>
      </div>

      <div className="activité1">
        <img src={do1_image_java} alt="java" />
        <h2>Java / Java EE</h2>
        <p>Formation approfondie sur le développement d’applications Java pour le web et les entreprises.</p>
      </div>

      <div className="activité1">
        <img src={do1_image_NET} alt="NET" />
        <h2>.NET Framework</h2>
        <p>Formation axée sur la création d'applications robustes avec la plateforme Microsoft .NET.</p>
      </div>

      <div className="activité1">
        <img src={do1_image_reseaux} alt="réseaux" />
        <h2>Réseaux informatiques</h2>
        <p>Conférence technique sur la gestion des réseaux modernes.</p>
      </div>
    </section>

        </div>
    )
 }