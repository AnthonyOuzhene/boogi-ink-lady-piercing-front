import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function VisitorBookForm() {

    const userIsConnected = useSelector((state) => state.userIsConnected);

    const url = 'http://localhost:8000/api/comments';

    const notifySuccess = () => {
        toast.success('Message envoyé !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    };

    const [name, setName] = useState('');
    const [realisationDate, setRealisationDate] = useState('');
    const [activity, setActivity] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState('');

    const handleSubmitComment = (e) => {
        setErrorMessages('');
        e.preventDefault();

        if (name === '' || realisationDate === '' || activity === '' || title === '' || message === '') {
            setErrorMessages('Veuillez remplir tous les champs');
        }
        else if (name.length < 3) { setErrorMessages('Le pseudo doit contenir au moins 3 caractères'); }
        else if (title.length < 5) { setErrorMessages('Le titre doit contenir au moins 5 caractères'); }
        else if (message.length < 10) { setErrorMessages('Le message doit contenir au moins 10 caractères'); }

        else {
            
            axios.post(url, JSON.stringify(
                {
                    name: name,
                    realisationDate: realisationDate,
                    activity: activity,
                    title: title,
                    message: message
                }),
                {
                    headers: {
                        "Accept": "application/json",
                        'Content-Type': 'application/json',
                    }
                }
            )
                .then(function (response) {
                    console.log(response);
                    notifySuccess();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <div className="toast">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={3}
            />

            {userIsConnected ? <h2 className="visitor-book-subtitle">Partagez votre expérience</h2> : <button className="visitor-book-subtitle">Vous devez être connecté pour laisser un commentaire</button>}

            {userIsConnected && (
                <div>
                    <form className="formContainer" onSubmit={handleSubmitComment}>

                        <label className="fname">Pseudo</label>
                        <input
                            type="text"
                            id="pseudo"
                            placeholder="Votre pseudo" required
                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>
                        <br></br>


                        <label className="date">Date de passage (facultatif)</label>
                        <input type="date"
                            id="date"
                            name="date"
                            onChange={(e) => setRealisationDate(e.target.value)}
                        >
                        </input>
                        <br></br>


                        <fieldset>
                            <legend className="note">Prestation</legend>
                            <div className="radio">
                                <div>
                                    <input type="radio"
                                        id="tatouage"
                                        name="prestation"
                                        value="tatouage"
                                        onChange={(e) => setActivity(e.target.value)}
                                    >
                                    </input>
                                    <br></br>

                                    <label className="tatouage">Tatouage</label>
                                </div>

                                <div>
                                    <input type="radio"
                                        id="piercing"
                                        name="prestation"
                                        value="piercing"
                                        onChange={(e) => setActivity(e.target.value)}
                                    >
                                    </input>
                                    <br></br>

                                    <label className="piercing">Piercing</label>
                                </div>
                            </div>
                        </fieldset>

                        <label className="titre">Projet</label>
                        <input type="text"
                            id="titre"
                            placeholder="Description de votre projet" required
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>
                        <br></br>


                        <label className="subject">Commentaire</label>
                        <textarea id="subject"
                            name="subject"
                            placeholder="Votre message" required
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <br></br>

                        <input className="" type="submit" value="Envoyer"></input>
                        <br></br>

                        <div className="error">{errorMessages}</div>

                    </form>
                </div>
            )}
        </div>
    );
}

export default VisitorBookForm;