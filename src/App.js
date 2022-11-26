// Import des modules React
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import des composants
import Contact from './components/Contact/ContactPage';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import TattooWorkShop from './components/TattooWorkShop/TattooWorkShop';
import PiercingWorkSpace from './components/PiercingWorkSpace/PiercingWorkSpace';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atelier-tatouage" element={<TattooWorkShop />} />
        <Route path="/espace-piercing" element={<PiercingWorkSpace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;