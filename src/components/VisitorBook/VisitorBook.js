import React, { useState, useEffect } from 'react';
import './visitorBook.scss';
import VisitorBookForm from './VisitorBookForm';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import axios from 'axios';


function VisitorBook() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:8000/api/comments')
            .then((response) => {
                //console.log(response.data['hydra:member']);
                setComments(response.data['hydra:member']);
            });
    }, []);


        return (
            <div>

                <h1 className="visitor-book-title">Le livre d'or</h1>

                <h2 className="visitor-book-subtitle">Nos derniers commentaires</h2>

                <div className="visitor-book-container">
                    {comments.map((comment, i) => {
                        return (
                            <fieldset key={i} className="visitor-book-comment">
                                <h3 className="visitor-book-comment-name">{comment.user_id.name}</h3>
                                <h4 className="visitor-book-comment-date">{comment.comment_date}</h4>

                                <p>
                                    <span className="visitor-book-comment-title">{comment.title}</span>
                                </p>

                                <p className="visitor-book-comment-text">{comment.message}</p>
                                <p className="visitor-book-comment-link">Lire la suite</p>

                                <legend className="visitor-book-comment-service">{comment.activity_name.name}</legend>

                            </fieldset>
                        )
                    })}

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