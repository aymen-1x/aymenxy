//import { tr } from "framer-motion/m";
import React, { useState } from "react";

const Contact=()=>{
const [nom,setNom]=useState('');
const [prénom,setprénom]=useState('');
const [email,setemail]=useState('');
const [commentaire,setcommentaire]=useState('');
const [message, setMessage] = useState('');
const [erreurs, setErreurs] = useState({});
const [donner,setdonner]=useState(false);
 const verifierDonnees = () => {
    const erreursTemp = {};
 
    if (nom.trim() === '') {
      erreursTemp.nom = 'Le nom est requis.';
    setdonner(true)
    }
    if (prénom.trim() === '') {
      erreursTemp.prénom = 'Le nom est requis.';
    setdonner(true)
    }
    if (!email.includes('@') || !email.includes('.')) {
      erreursTemp.email = 'Email invalide.';
      setdonner(true)
    }
    
    return erreursTemp;
  }
 
 
 const handleSubmit = (e) => {
    e.preventDefault();
         const erreursTrouvees = verifierDonnees();

    if (Object.keys(erreursTrouvees).length === 0) {
      setMessage=alert(`Bienvenue, ${nom} ! Votre email (${email}) est valide.`);
      setErreurs({});
    } else {
      setErreurs(erreursTrouvees);
      setMessage('');
    }

 }
    return(
        <div className="conTact" id="formU"> 
          <form action="" onSubmit={handleSubmit}>
               <h1>contactez-nous: </h1>

            <label>nom<span style={{ color: 'red',fontSize:'25px' ,marginTop:'-4px'}}>*</span>:</label><br />
             
           <input type="text" style={donner ? { border: '2px solid red' } : {}} placeholder="entrez votre nom " value={nom} name="nom" onChange={(e) => setNom(e.target.value)} /><br /> <br />
            {erreurs.nom && <p style={{ color: 'red',textAlign:'center',position:'relative' ,top:'-4vh'}}>{erreurs.nom}</p>}

            <label>prénom<span style={{ color: 'red',fontSize:'25px' ,marginTop:'-4px' }}>*</span>:</label><br />
            <input type="text" style={donner ? { border: '2px solid red' } : {}}  placeholder="entrez votre prénom "  name="prénom" value={prénom} onChange={(e) => setprénom(e.target.value)}/> <br /> <br />

            <label>email<span style={{ color: 'red',fontSize:'25px' ,marginTop:'-4px' }}>*</span>:</label><br />
            <input type="email" style={donner ? { border: '2px solid red' } : {}} placeholder="entrez votre émail " value={email} name="email" onChange={(e) => setemail(e.target.value)}/> <br /> <br />
              {erreurs.email && <p style={{ color: 'red',textAlign:'center',position:'relative' ,top:'-4vh'}}>{erreurs.email}</p>}

            <label htmlFor="commentaire ">votre commentaire<span style={{ color: 'red',fontSize:'25px' ,marginTop:'-4px' }}>*</span>:</label><br />
            <textarea  placeholder="entrez un comentaire  " value={commentaire} name="commentaire " onChange={(e) => setcommentaire(e.target.value)} id=""></textarea><br />

            <button type="submit" >envoyer</button>
              
            
         </form>
          {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>

    )

}

export default Contact;