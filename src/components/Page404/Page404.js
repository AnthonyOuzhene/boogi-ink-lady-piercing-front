import React from 'react';
import './page404.scss';
import BadTattoo from './images/bad-tattoo.jpg';

const Page404 = () => {
    return (
        <div>
            <h1 className="text-center">Oups, cette page n'existe pas</h1>

            <h2 className="error-title">
                <a href="/">Méritez la prestation qui correspond à votre projet</a>
            </h2>

            <img src={BadTattoo} alt="bad-tattoo" className="bad-tattoo" />
        </div>
    )
}

export default Page404;