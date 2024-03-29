import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
//import { ImExit } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai';
import { SlLogin } from 'react-icons/sl';
import logo from '../images/logo_mobile.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUserIsConnected } from '../../../actions/actions';
import './styles.scss';

const Navbar = () => {

    const dispatch = useDispatch();

    const userIsConnected = useSelector((state) => state.userIsConnected);
    //console.log(userIsConnected);
    const userIsAdmin = useSelector((state) => state.userIsAdmin);
    //console.log(userIsAdmin);

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

                    <a href="/">
                        <img src={logo} alt="logo mobile" className='logo-burger' />
                    </a>

                    <a href='/panier' className='basket'><BiShoppingBag className="basket-logo" /></a>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <a href='/' onClick={closeMenu}>Accueil</a>
                        </li>

                        <li className='nav-item top-drop'>
                            <li onClick={closeMenu}>Le salon</li>
                            <ul className="dropdown-content">
                                <li><a href='/atelier-tatouage'>L'atelier Tatouage</a></li>
                                <li><a href='/espace-piercing'>L'espace Piercing</a></li>
                            </ul>
                        </li>


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


                        <li className='nav-item top-drop'>

                            {!userIsConnected && (
                                <li className='login-icon'>
                                    <a href='/connexion' onClick={closeMenu}><SlLogin /></a>
                                </li>
                            )}

                            {userIsConnected && (
                                <li className='' onClick={closeMenu}>
                                    <AiOutlineUser />
                                </li>
                            )}

                            <ul className="dropdown-content">

                                {userIsConnected && (
                                    <li className='' onClick={() => {
                                        sessionStorage.removeItem('token');
                                        sessionStorage.removeItem('userInfos');
                                        sessionStorage.removeItem('roles');
                                        dispatch(setUserIsConnected(false));
                                    }}>
                                        <a href='/connexion'>Deconnexion</a>
                                    </li>
                                )}
                                {userIsConnected && (
                                    <li>
                                        <a href='/profil' onClick={closeMenu}>Mon profil</a>
                                    </li>
                                )}
                                {userIsConnected && userIsAdmin && (
                                    <li>
                                        <a href='http://localhost:8000/admin' target="blank" onClick={closeMenu}>Backoffice</a>
                                    </li>
                                )}
                            </ul>

                        </li>

                    </ul>
                </nav>

            </div>
        </div >
    )
}

export default Navbar