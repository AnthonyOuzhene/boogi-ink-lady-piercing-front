import React, { useState } from 'react'
import './styles.scss'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login_check',
            {
                email: email,
                password: password
            },
            {
                headers: {
                    'Accept:': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
    )
    .then(function (response) {
        window.location.href = '/';
        console.log(response);
    })

}
console.log(handleSubmitLogin);

        return (
            <div className='container-login'>
                <h1>Connexion</h1>
                <form className="formContainer" action="/action_page.php">
                    <label className="emailAddress">E-mail</label>
                    <input id="emailAddress" type="email" name="email" placeholder="Votre email" required></input><br></br>

                    <label className="password">Mot de passe</label>
                    <input id="password" type="password" name="password" placeholder="Votre mot de passe" required></input><br></br>
                    <p className="forgotPassword">Mot de passe oublié ?</p>

                    <input className="send" type="submit" value="Envoyer"></input>

                    <div className="signUp">
                        <p>Vous voulez nous rejoindre ?</p>
                        <a className="go-to-signup" href="/inscription">Inscrivez-vous !</a>
                    </div>

                </form>

            </div>
        );
    }

    export default Login