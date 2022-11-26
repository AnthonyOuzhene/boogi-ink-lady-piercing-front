import React from 'react';
import './styles.scss';
//import ladypiercinglogo from './images/ladypiercinglogo.png';
import ladypiercing from './images/lady-piercing.jpg';
// import { PiercingData } from './PiercingData';
import piercing1 from './images/piercing1.jpg';
import piercing2 from './images/piercing2.jpg';
import piercing3 from './images/piercing3.jpg';
import piercing4 from './images/piercing4.jpg';
import piercing5 from './images/piercing5.jpg';
import piercing6 from './images/piercing6.jpg';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa';


const PiercingWorkSpace = () => {

    return (
        <div>
            <h1 className="lady-piercing-welcome">Bienvenue dans l'espace piercing de <span className='lady-piercing-name'>Lady Piercing</span></h1>

            <div className='presentation-lady-piercing'>
                <div className='lady-piercing'>

                    <img className="lady-piercing-picture" src={ladypiercing} alt="Pady Piercing" />
                </div>

                <p className="lady-piercing-description">Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur.
                </p>
            </div>

            <div className="lady-piercing-service-list">
                <h2 className="lady-piercing-service-list-title">Liste des prestations</h2>

                <div className="lady-piercing-service-list-content">
                    <div className="lady-piercing-service-list-category">
                        <h3 className="lady-piercing-service-list-content-category">Piercing oreille</h3>
                        <ul className="lady-piercing-service-list-content-list">
                            <li className="lady-piercing-service-list-content-list-item">Oreille simple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille double<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille triple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille quadruple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille quintuple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille sextuple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille septuple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille huituple<span className="service-price"> - 15€</span></li>
                        </ul>
                        <h3 className="lady-piercing-service-list-content-category">Piercing visage</h3>
                        <ul className="lady-piercing-service-list-content-list">
                            <li className="lady-piercing-service-list-content-list-item">Piercing nez<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing langue<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing lèvre<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing sourcil<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing nombril<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing oreille<span className="service-price"> - 15€</span></li>
                        </ul>
                        <h3 className="lady-piercing-service-list-content-category">Piercing corps</h3>
                        <ul className="lady-piercing-service-list-content-list">
                            <li className="lady-piercing-service-list-content-list-item">Piercing nombril -<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing sein simple<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Piercing sein double<span className="service-price"> - 15€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Surface<span className="service-price"> - 15€</span></li>
                        </ul>
                        <h3 className="lady-piercing-service-list-content-category">Piercing intime femmes</h3>
                        <ul className="lady-piercing-service-list-content-list">
                            <li className="lady-piercing-service-list-content-list-item">Capuchon<span className="service-price"> - 85€</span></li>
                            <li className="lady-piercing-service-list-content-list-item">Grandes & petites lèvres<span className="service-price"> - 85€</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="gallery-title">Galerie photos des piercings</h2>

            <div className='piercing-gallery'>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing1} alt="piercing" />
                </a>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing2} alt="piercing" />
                </a>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing3} alt="piercing" />
                </a>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing4} alt="piercing" />
                </a>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing5} alt="piercing" />
                </a>
                <a href="x" className="piercing-gallery-link">
                    <img src={piercing6} alt="piercing" />
                </a>

                {/* {
                    PiercingData.map((tattoo, index) => {
                        return (
                            <div className key={index}>

                                {(<img src={tattoo.image} alt='tattoo' />)}
                            </div>
                        )
                    })
                } */}
            </div>

            <div className="lady-piercing-gallery-button">
                <button className="lady-piercing-gallery-button-left"><FaArrowAltCircleLeft /></button>
                <div className="lady-piercing-gallery-button-number">
                    <button className="lady-piercing-gallery-button-number-1">1</button>
                    <button className="lady-piercing-gallery-button-number-2">2</button>
                    <button className="lady-piercing-gallery-button-number-3">3</button>
                </div>
                <button className="lady-piercing-gallery-button-right"><FaArrowAltCircleRight /></button>
            </div>

  




            <div className="FAQ">
                <h2 className='FAQ-title'>Foire aux questions</h2>
                <h3 className="FAQ-subtitle">Tout savoir sur le Piercing chez Lady Piercing</h3>


                <div className='FAQ-questions'>

                    <div className='FAQ-question'>
                        <h4 className="question"><FaArrowAltCircleDown className="arrow-down" /> Quel est le prix d'un piercing ?</h4>
                        <p className="FAQ-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>

                    <div className='FAQ-question'>
                        <h4 className="question"><FaArrowAltCircleDown className="arrow-down" /> Quels sont les zones les plus douloureuses du corps lors d'un piercing</h4 >
                        <p className="FAQ-answer">Lorem ipsum dolor sit amet consectetur adipisicing selit. Quisquam, quae.</p>
                    </div>

                    <div className='FAQ-question'>
                        <h4 className="question"><FaArrowAltCircleDown className="arrow-down" /> Quels sont les soins pendant la cicatrisation</h4>
                        <p className="FAQ-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PiercingWorkSpace;