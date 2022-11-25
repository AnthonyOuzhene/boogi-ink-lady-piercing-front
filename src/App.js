import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import TattooWorkShop from './components/TattooWorkShop/TattooWorkShop';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atelier-tatouage" element={<TattooWorkShop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;