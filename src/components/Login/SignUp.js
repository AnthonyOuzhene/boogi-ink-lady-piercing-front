import React from 'react'

const SignUp = () => {
  return (
    <div className='container'>
      <h1>Inscription</h1>

      <form className="formContainer" action="/action_page.php">

        <label for="pseudo">Pseudo</label>
        <input id="pseudo" type="email" name="email" placeholder="Votre pseudo" required></input><br></br>

        <label for="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email" placeholder="Votre email" required></input><br></br>

        <label for="password">Mot de passe</label>
        <input id="password" type="password" name="password" placeholder="Votre mot de passe" required></input><br></br>

        <label for="password">Confirmer le mot de passe</label>
        <input id="password" type="password" name="password" placeholder="Confirmer le mot de passe" required></input><br></br>

        <input type="submit" value="Rejoindre"></input>

      </form>
    </div>
  )
}

export default SignUp