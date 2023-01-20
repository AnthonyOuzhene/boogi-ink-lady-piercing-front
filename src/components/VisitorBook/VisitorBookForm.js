import React from 'react';

function VisitorBookForm() {
    return (
        <div>
            <form className="formContainer" action="/action_page.php">



                <label className="fname">Pseudo</label>
                <input type="text" id="pseudo" placeholder="Votre pseudo" required></input><br></br>

                <label className="date">Date de passage (facultatif)</label>
                <input type="date" id="date" name="date"></input><br></br>

                <fieldset>
                    <legend className="note">Prestation</legend>
                    <div className="radio">
                        <div>
                            <input type="radio" id="tatouage" name="prestation" value="tatouage"
                                ></input>
                            <label className="tatouage">Tatouage</label>
                        </div>

                        <div>
                            <input type="radio" id="piercing" name="prestation" value="piercing"></input>
                            <label className="piercing">Piercing</label>
                        </div>
                    </div>
                </fieldset>

                <label className="titre">Projet</label>
                <input type="text" id="titre" placeholder="Description de votre projet" required></input><br></br>

                <label className="subject">Commentaire</label>
                <textarea id="subject" name="subject" placeholder="Votre message" required></textarea><br></br>

                <input className="" type="submit" value="Envoyer"></input>

            </form>
        </div>
    )
}

export default VisitorBookForm;