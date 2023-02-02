import React from 'react';
import './shop.scss';
import underContruction from './images/construction.jpg';


const Shop = () => {

    return (
        <div>

            <h1 className="text-center">Bienvenue dans la boutique</h1>

            <h2 className="gallery-title">Coming Soon</h2>

            <img src= {underContruction} alt="coming-soon" className="underContruction" />

        </div>
    )
}

export default Shop;