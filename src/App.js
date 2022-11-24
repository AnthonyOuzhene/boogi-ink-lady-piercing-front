import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <div className='App'>
  <Router>
    <Header />
     <HomePage path="/"/>
     <Footer />
  </Router>
  </div>
  );
}

export default App;