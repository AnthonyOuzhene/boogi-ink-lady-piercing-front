import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './styles.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
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
                    <li className='nav-item'>
                        <a href='x' onClick={closeMenu}>Le salon</a>
                    </li>
                    <li className='nav-item'>
                        <a href='x' onClick={closeMenu}>La boutique</a>
                    </li>
                    <li className='nav-item'>
                        <a href='x' onClick={closeMenu}>Actualités</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#x' onClick={closeMenu}>Livre d'or</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#x' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#dx' onClick={closeMenu}>Mon compte</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar