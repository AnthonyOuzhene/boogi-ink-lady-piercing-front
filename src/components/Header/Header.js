import React from 'react';
import Navbar from './NavBar/Navbar';
import './styles.scss';

import TattooBanner from './images/tattoo-banner.jpg';


const Header = () => {
  return (
    <div>
    <Navbar />
    <img src={ TattooBanner } alt="banniere-salon" className="header-img"/>
    </div>
  )
}

export default Header;