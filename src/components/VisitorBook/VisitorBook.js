import React from 'react';
import './visitorBook.scss';
import VisitorBookForm from './VisitorBookForm';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


function VisitorBook() {
    return (
        <div>
            <h1 className="visitor-book-title">Le livre d'or</h1>

            <h2 className="visitor-book-subtitle">Nos derniers commentaires</h2>

            <div className="visitor-book-container">
                <fieldset className="visitor-book-comment">
                    <h3 className="visitor-book-comment-name">Jeanne</h3>
                    <h4 className="visitor-book-comment-date">12/12/2020</h4>

                    <p className="visitor-book-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem.</p>
                    <p className="visitor-book-comment-link">Lire la suite</p>
                    <legend className="visitor-book-comment-service">Prestation</legend>

                </fieldset>

                <fieldset className="visitor-book-comment">
                    <h3 className="visitor-book-comment-name">Jeanne</h3>
                    <h4 className="visitor-book-comment-date">Le 12/12/2020</h4>
                    <p className="visitor-book-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem.</p>
                    <p className="visitor-book-comment-link">Lire la suite</p>
                    <legend className="visitor-book-comment-service">Prestation</legend>
                </fieldset>

                <fieldset className="visitor-book-comment">
                    <h3 className="visitor-book-comment-name">Jeanne</h3>
                    <h4 className="visitor-book-comment-date">Le 12/12/2020</h4>
                    <p className="visitor-book-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem.</p>
                    <p className="visitor-book-comment-link">Lire la suite</p>
                    <legend className="visitor-book-comment-service">Prestation</legend>
                </fieldset>

                <fieldset className="visitor-book-comment">
                    <h3 className="visitor-book-comment-name">Jeanne</h3>
                    <h4 className="visitor-book-comment-date">Le 12/12/2020</h4>
                    <p className="visitor-book-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet lorem.</p>
                    <p className="visitor-book-comment-link">Lire la suite</p>
                    <legend className="visitor-book-comment-service">Prestation</legend>
                </fieldset>

                <div className="pagination">
                    <FaArrowAltCircleLeft className="pagination-arrow" />
                    <p className="pagination-number">1</p>
                    <p className="pagination-number">2</p>
                    <p className="pagination-number">3</p>
                    <FaArrowAltCircleRight className="pagination-arrow" />
                </div>
            </div>

            <h2 className="visitor-book-subtitle">Partagez votre expérience</h2>

            <VisitorBookForm />
        </div>
    )
}

export default VisitorBook