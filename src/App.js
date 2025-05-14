// App.js
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Accueil from './accueil';
import Header from "./header";
import Apropo from './Àpropos';
import Activite from './Activités';
import * as THREE from "three";
import NET from 'vanta/dist/vanta.net.min';
import Contact from "./contact";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x2ec079,
          backgroundColor: 0x0,
          points: 20.00,
          maxDistance: 10.00,
          spacing: 20.00
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="vanta-bg"     style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
  }} />;
};

function App() {
  return (
        <Router> 
      <div className='app'>
        <VantaBackground />
        <Header /> 
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropo />} />
          <Route path="/activite" element={<Activite />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
