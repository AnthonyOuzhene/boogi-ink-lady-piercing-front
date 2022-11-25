import React from 'react'
import GoogleMap from '../HomePage/GoogleMap'
import { FaTiktok } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div>
    <h1> Contact </h1>
    <p> Notre salon se situe au </p>
    <p> 332 Rue Louis Gillain <br></br>
        27210 Beuzeville </p>
    < GoogleMap />
    <h2> Suivez-nous ! </h2>
    <div className="social-icons">
        < FaTiktok />
        < BsInstagram />
        < FaFacebook />
        < AiFillMail />
    </div>
    <ContactForm />
    </div>
  )
}

export default Contact