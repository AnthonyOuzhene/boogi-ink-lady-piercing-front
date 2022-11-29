import React from 'react'
import './styles.scss'

const Login = () => {
    return (
        <div>
            <h1>Connexion</h1>
            <form className="formContainer" action="/action_page.php">
                <label for="emailAddress">Email</label>
                <input id="emailAddress" type="email" name="email" placeholder="Votre email" required></input><br></br>

                <label for="password">Mot de passe</label>
                <input id="password" type="password" name="password" placeholder="Votre mot de passe" required></input><br></br>

                <input type="submit" value="Envoyer"></input>
            </form>            

            <p>
                hello
            </p>
        </div>
    );
}

export default Login