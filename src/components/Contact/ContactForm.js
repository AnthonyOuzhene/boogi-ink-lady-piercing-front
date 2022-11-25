import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <h2>Formulaire de contact</h2>
            <form action="/action_page.php">
                <label for="fname">Nom & prénom</label>
                <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"></input>

                <label for="sujet">Sujet</label>
                <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"></input>

                <label for="emailAddress">Email</label>
                <input id="emailAddress" type="email" name="email" placeholder="Votre email"></input>

                <label for="subject">Message</label>
                <textarea id="subject" name="subject" placeholder="Votre message"></textarea>

                <input type="submit" value="Envoyer"></input>
            </form>            
        </div>
    );
}

                    export default ContactForm