import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
  <div className='App'>
  <Router>
    <Navbar />
     <HomePage path="/"/>
     <Footer />
  </Router>
  </div>
  );
}

export default App;