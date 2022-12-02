import React from 'react'
import './contact.scss'

const ContactForm = () => {
    return (
        <div>
            <h2>Formulaire de contact</h2>
            <form className="formContainer" action="/action_page.php">
                <label for="fname">Nom et prénom</label>
                <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" required></input><br></br>
                
                <label for="emailAddress">E-mail</label>
                <input id="emailAddress" type="email" name="email" placeholder="Votre email" required></input><br></br>

                <label for="sujet">Sujet</label>
                <input type="text" id="sujet" name="sujet" placeholder="Objet de votre message" required></input><br></br>

                {/* <label for="sujet">Date de passage (facultatif)</label>
                <input type="date" id="date" name="date"></input><br></br> */}

                <label for="subject">Message</label>
                <textarea id="subject" name="subject" placeholder="Votre message" required></textarea><br></br>

                <input type="submit" value="Envoyer"></input>
            </form>            
        </div>
    );
}

export default ContactForm