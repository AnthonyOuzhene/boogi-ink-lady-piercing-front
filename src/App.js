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
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import VisitorBook from './components/VisitorBook/VisitorBook';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/atelier-tatouage" element={<TattooWorkShop />} />
        <Route path="/espace-piercing" element={<PiercingWorkSpace />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/livre-d-or" element={<VisitorBook />} />
        <Route path="/actualites" element={<Blog />} />
        <Route path="/actualites/article" element={<BlogSingle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;