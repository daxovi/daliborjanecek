import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { menuCategories } from '../content/content';
import "./Header.css";

import logoMessenger from "../img/messenger.svg";
import logoInstagram from "../img/instagram.svg";

const Header = () => {
    const location = useLocation(); // Získáme aktuální cestu

    // Zjistíme, zda jsme na kořenové cestě "/"
    const isRoot = location.pathname === "/";

    return (
        <header>
            <div className="text">
                <div className="social">
                    <a href=""><img src={logoMessenger} alt="Messenger link" /></a>
                    <a href=""><img src={logoInstagram} alt="Instagram link" /></a>
                </div>
                <div>
                <h1>
                    <span>Dalibor Janeček </span><br /> Visual experience
                </h1>
                <nav className={isRoot ? "no-strikethrough" : ""}>
                    <NavLink to="/" activeClassName="active">
                        all
                    </NavLink>
                    {menuCategories.map((category) => (
                        <NavLink
                            key={category}
                            to={`/${category}`}
                            activeClassName="active"
                        >
                            {category}
                        </NavLink>
                    ))}
                </nav>
                </div>
                <div className="contact">
                    <p>T: +420 734 424 368</p>
                    <p>E: <a href="mailto:hi@daliborjanecek.cz">hi@daliborjanecek.cz</a></p>
                </div>
            </div>
        </header>
    )
}

export default Header