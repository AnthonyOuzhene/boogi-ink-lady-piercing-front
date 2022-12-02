import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import './styles.scss'

const Navbar = () => {

    // setting the state of the navbar
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change navbar color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 700) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
        <div className='header'>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>

                    <div className='link-salons'>
                    <li className='nav-item'>
                        <p className='le-salon' onClick={closeMenu}>Le salon</p>
                    </li>
                        <div className="dropdown-content">         
                         <ul>
                           <li><a href='/atelier-tatouage'>L'atelier Tatouage</a></li>
                            <li><a href='/espace-piercing'>L'espace Piercing</a></li>
                         </ul>
                        </div> 
                    </div>

                    <li className='nav-item'>
                        <a href='/la-boutique' onClick={closeMenu}>La boutique</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/actualites' onClick={closeMenu}>Actualités</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/livre-d-or' onClick={closeMenu}>Livre d'or</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/contact' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item login-icon'>
                        <a href='/connexion' onClick={closeMenu}><AiOutlineUser /></a>
                    </li>
                </ul>
            </nav>

        </div>
        </div>
    )
}

export default Navbar