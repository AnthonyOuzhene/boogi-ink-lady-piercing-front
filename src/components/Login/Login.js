import React from 'react'
import './styles.scss'

const Login = () => {
    return (
        <div className='container-login'>
            <h1>Connexion</h1>
            <form className="formContainer" action="/action_page.php">
                <label for="emailAddress">E-mail</label>
                <input id="emailAddress" type="email" name="email" placeholder="Votre email" required></input><br></br>

                <label for="password">Mot de passe</label>
                <input id="password" type="password" name="password" placeholder="Votre mot de passe" required></input><br></br>
                <p className="forgotPassword">Mot de passe oublié ?</p>

                <input className="send" type="submit" value="Envoyer"></input>

                <div className="signUp">
                    <p>Vous voulez nous rejoindre ?</p>
                    <a href="/inscription">Inscrivez-vous</a>
                </div>

            </form>

        </div>
    );
}

export default Login