import React from 'react';
import './styles.scss';

const Navbar = () => {
  return (
        <nav className='navbar'>

                <ul className='nav-menu'>
                    <li>
                        <a href="/">
                            <p>Accueil</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>Le salon</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>L'espace Tattoo</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>L'espace Piercing</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>La boutique</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>Contact</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <p>Mon compte</p>
                        </a>
                    </li>
                </ul>
       
        </nav>
  )
}

export default Navbar