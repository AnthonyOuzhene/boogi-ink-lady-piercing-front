import React from 'react'
import './styles.scss';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className="footer">

      <hr className="footer-seperator" />

      <section className="footer-salon">
        <div className='coordonnees-salon'>
          <a href="/contact">
            <div className="footer-salon-contact-details">
              <p className="footer-salon-title">Boogi'ink Tattoo & Lady Piercing</p>
              <p className="footer-salon-adresse">332 Rue Louis Gillain</p>
              <p className="footer-salon-ville">27210 Beuzeville</p>
              <p className="footer-salon-telephone">09.80.49.43.32</p>
              <p className="footer-salon-mail">ladyboogiink@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      <section className="footer-info">

        <section className="footer-info-left">
          <a href="/" className="footer-info__name">
            Accueil
          </a>
          <a href="/atelier-tatouage" className="footer-info__tattoo">
            L'atelier tatouage
          </a>
          <a href="/espace-piercing" className="footer-info__piercing">
            L'espace Piercing
          </a>
          <a href="/boutique" className="footer-info__piercing">
            La boutique
          </a>
          <a href="/livre-d-or" className="footer-info__piercing">
            Le livre d'or
          </a>
          <a href="/contact" className="footer-info__piercing">
            Contact
          </a>
        </section>

        <section className="footer-info-center">
          <a href="x" className="footer-info__legals">
            Mentions Légales
          </a>
          <a href="x" className="footer-info__politique">
            Politique de confidentialité
          </a>
          <a href="x" className="footer-info__terms">
            Règles sanitaires
          </a>
        </section>

        <section className="footer-info-right">
            <a href='https://www.instagram.com/julienbourgarit/' target={'blank'}>< BsInstagram /></a>
            <a href='https://www.facebook.com/julienbourgarit/' target={'blank'}>< FaFacebook /></a>
            <a href='mailto:ladyboogiink@gmail.com' target={'blank'}>< AiFillMail /></a>
        </section>


      </section>
    </section>
  )
}

export default Footer