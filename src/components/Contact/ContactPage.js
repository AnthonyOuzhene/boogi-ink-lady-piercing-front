import React from 'react'
import GoogleMap from '../HomePage/GoogleMap'
import { FaTiktok } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='container'>
            <div className='contact'>
                <h2> Notre salon se situe au :</h2>
                <p> 332 Rue Louis Gillain <br></br>
                    27210 Beuzeville </p>
            </div>
            < GoogleMap />
            <ContactForm />
            <div className='social'>
                <h2> Suivez-nous ! </h2>
                <div className="social-icons">
                <a href='rt' target={'blank'}>< FaTiktok /></a>
                <a href='https://www.instagram.com/julienbourgarit/' target={'blank'}>< BsInstagram /></a>
                <a href='https://www.facebook.com/julienbourgarit/' target={'blank'}>< FaFacebook /></a>
                <a href='rt' target={'blank'}>< AiFillMail /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact