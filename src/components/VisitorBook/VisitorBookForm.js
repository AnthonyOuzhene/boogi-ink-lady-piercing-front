import React from 'react';

function VisitorBookForm() {
    return (
        <div>
            <form className="formContainer" action="/action_page.php">



                <label for="fname">Pseudo</label>
                <input type="text" id="pseudo" placeholder="Votre pseudo" required></input><br></br>

                <label for="date">Date de passage (facultatif)</label>
                <input type="date" id="date" name="date"></input><br></br>


                <fieldset>
                    <legend for="note">Prestation</legend>
                    <div className="radio">
                        <div>
                            <input type="radio" id="tatouage" name="prestation" value="tatouage"
                                checked></input>
                            <label for="tatouage">Tatouage</label>
                        </div>

                        <div>
                            <input type="radio" id="piercing" name="prestation" value="piercing"></input>
                            <label for="piercing">Piercing</label>
                        </div>
                    </div>
                </fieldset>

                <div className="rating">
                    <label for="note">Appréciation</label>
                    <div className="stars">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>



                <label for="subject">Commentaire</label>
                <textarea id="subject" name="subject" placeholder="Votre message" required></textarea><br></br>

                <input className="" type="submit" value="Envoyer"></input>

            </form>
        </div>
    )
}

export default VisitorBookForm;