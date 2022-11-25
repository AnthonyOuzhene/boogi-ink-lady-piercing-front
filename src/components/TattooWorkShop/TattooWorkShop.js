import React from 'react';
import './styles.scss';
import boogiinklogo from './images/boogiinklogo.jpg';
// import { GalleryTattooData } from './GalleryTattooData';
import tattoo1 from './images/tattoo1.jpg';
import tattoo2 from './images/tattoo2.png';
import tattoo3 from './images/tattoo3.jpg';
import tattoo4 from './images/tattoo4.jpg';
import tattoo5 from './images/tattoo5.jpg';
import tattoo6 from './images/tattoo6.jpg';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa';




const TattooWorkShop = () => {

    return (
        <div>
            <h1 className="tattoo-welcome">Bienvenue dans l'atelier Tatouage de <span className='name'>BoOgi 'InK</span></h1>

            <div className='presentation-tattoer'>
                <div className='tattooer'>
                    <h2 className='tattoer-name'>BoOgi 'InK</h2>

                    <img className="tattoer-picture" src={boogiinklogo} alt="tatoueur" />
                </div>

                <p className="tattoer-description">Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur.
                </p>
            </div>

            <h2 className="gallery-title">Galerie photos des tatouages</h2>

            <div className='tattoo-gallery'>

                <img src={tattoo1} alt="tattoo" />
                <img src={tattoo2} alt="tattoo" />
                <img src={tattoo3} alt="tattoo" />
                <img src={tattoo4} alt="tattoo" />
                <img src={tattoo5} alt="tattoo" />
                <img src={tattoo6} alt="tattoo" />

                {/* {
                    GalleryTattooData.map((tattoo, index) => {
                        return (
                            <div className key={index}>

                                {(<img src={tattoo.image} alt='tattoo' />)}
                            </div>
                        )
                    })
                } */}
            </div>

            <div className="tattoo-gallery-button">
                <button className="tattoo-gallery-button-left"><FaArrowAltCircleLeft /></button>
                <div className="tattoo-gallery-button-number">
                    <button className="tattoo-gallery-button-number-1">1</button>
                    <button className="tattoo-gallery-button-number-2">2</button>
                    <button className="tattoo-gallery-button-number-3">3</button>
                </div>
                <button className="tattoo-gallery-button-right"><FaArrowAltCircleRight /></button>
            </div>

            <div className="FAQ">
                <h2 className='FAQ-title'>Foire aux questions</h2>
                <h3 className="FAQ-subtitle">Tout savoir sur le tatouage chez BoOgi' InK</h3>


                <div className='FAQ-questions'>

                    <div className='FAQ-question'>
                        <h4 className="question"><FaArrowAltCircleDown className="arrow-down" /> Quel est le prix d'un tatouage ?</h4>
                        <p className="FAQ-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>

                    <div className='FAQ-question'>
                        <h4 className="question"><FaArrowAltCircleDown className="arrow-down" /> Quels sont les zones les plus douloureuses du corps lors d'un tatouage</h4 >
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

export default TattooWorkShop;