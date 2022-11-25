import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h2>Formulaire de contact</h2>
    <form>
  <label>
    Nom : 
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Envoyer" />
</form>
</div>
  )
}

export default ContactForm