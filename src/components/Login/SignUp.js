import React, { useState } from 'react';
import axios from 'axios';


const SignUp = () => {

  const url = 'http://localhost:8000/api';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessages, setErrorMessages] = useState('');

  const handleSubmitSignUp = (e) => {
    setErrorMessages('');
    e.preventDefault();

    if (name === '' || email === '' || password === '' || passwordConfirm === '') {
      setErrorMessages('Veuillez remplir tous les champs');
    }
    else if (name.length < 3) { setErrorMessages('Le pseudo doit contenir au moins 3 caractères'); }
    else if (email.length < 5) { setErrorMessages('L\'email doit contenir au moins 5 caractères'); }
    else if (password.length < 6) { setErrorMessages('Le mot de passe doit contenir au moins 6 caractères'); }
    else if (password !== passwordConfirm) { setErrorMessages('Les mots de passe ne correspondent pas'); }

    else {
      console.log('ok');
      axios.post(url + "/users", JSON.stringify(
        {
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm
        }),
        {
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
          }
        }
      )
        .then(function (response) {
          window.location.href = '/'
          console.log(response);
        })

        .catch(function (error) {
          console.log(error);
        }
        );
    }
  }



  return (
    <div className='container'>
      <h1>Inscription</h1>

      <form className="formContainer" onSubmit={handleSubmitSignUp}>

        <label className="pseudo">Pseudo</label>
        <input id="pseudo"
          type="text"
          name="name"
          placeholder="Votre pseudo" required
          onChange={(e) => setName(e.target.value)}
          >
        </input>
        <br></br>

        <label className="emailAddress">E-mail</label>
        <input id="emailAddress"
          type="email"
          name="email"
          placeholder="Votre email" required
          onChange={(e) => setEmail(e.target.value)}
          >
        </input><br></br>

        <label className="password">Mot de passe</label>
        <input id="password"
          type="password"
          name="password"
          placeholder="Votre mot de passe" required
          onChange={(e) => setPassword(e.target.value)}
          >
          </input><br></br>

        <label className="password">Confirmer le mot de passe</label>
        <input id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe" required
          onChange={(e) => setPasswordConfirm(e.target.value)}
          >
        </input><br></br>

        <input type="submit" value="Rejoindre"></input>
        <div className="error">{errorMessages}</div>

      </form>
    </div>
  )
}

export default SignUp