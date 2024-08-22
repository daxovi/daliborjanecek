import React from 'react'
import "./Footer.css";
import logoMessenger from "../img/messenger.svg";
import logoInstagram from "../img/instagram.svg";

const Footer = () => {
    return (
        <footer className="social">
            <a href=""><img src={logoMessenger} alt="Messenger link" /></a>
            <a href=""><img src={logoInstagram} alt="Instagram link" /></a>
        </footer>
    )
}

export default Footer