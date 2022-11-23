import React from 'react'
import './styles.scss';

const index = () => {
  return (
    <section className="footer">

    <hr className="footer-seperator" />
    <section className="footer-salon">
      <a href="/" target="_blank" rel="noopener noreferrer">Booki'ink Tattoo - Lady Piercing</a>
    </section>

    <section className="footer-info">
      <section className="footer-info-left">
        <section className="footer-info__name">
            Le salon
        </section>
        <section className="footer-info__tattoo">
          Tatouage
        </section> 
        <section className="footer-info__piercing">
          Règles sanitaires
          <br />
        </section>
      </section>

      <section className="footer-info-center">
      <section className="footer-info__legals">
          Mentions Légales
        </section>
        <section className="footer-info__politique">
          Politique de confidentialité
        </section>
        <section className="footer-info__terms">
          Règles sanitaires
          <br />
        </section>
      </section>

      <section className="footer-info-right">
        <section className="footer-info__a-propos">
          A propos
        </section>
        <section className="footer-info__contact">
          Qui sommes-nous
          <br />
          Contact
        </section>
      </section>
    </section>
  </section>
  )
}

export default index