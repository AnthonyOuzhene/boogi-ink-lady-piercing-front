import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import './styles.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div>
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
                        <a href='x' onClick={closeMenu}>Le salon</a>
                    </li>
                        <div className="dropdown-content">         
                         <ul>
                           <li><a href='/atelier-tatouage'>L'atelier Tattoo</a></li>
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
                        <a href='/livre-dor' onClick={closeMenu}>Livre d'or</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/contact' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item login-icon'>
                        <a href='/mon-compte' onClick={closeMenu}><AiOutlineUser /></a>
                    </li>
                </ul>
            </nav>

        </div>
        </div>
    )
}

export default Navbar