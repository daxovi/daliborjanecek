import React from 'react'
import "./Footer.css";
import logoMessenger from "../img/messenger.svg";
import logoInstagram from "../img/instagram.svg";

const Footer = () => {
    return (
        <footer className="social">
            <a href="https://m.me/daliborecek" target='_blank'rel="noopener noreferrer"><img src={logoMessenger} alt="Messenger link" /></a>
            <a href="https://www.instagram.com/djvisualexperience/" target='_blank' rel="noopener noreferrer"><img src={logoInstagram} alt="Instagram link" /></a>
        </footer>
    )
}

export default Footer