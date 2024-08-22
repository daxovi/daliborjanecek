import React from 'react'
import "./Header.css";
import Menu from './Menu';
import ButtonLink from './ui/ButtonLink';



const Header = () => {


    return (
        <header>
                    <h1>
                        <span>Dalibor Janeček </span>Visual experience
                    </h1>
                    <div className="contact">
                        <ButtonLink to="mailto:hi@daliborjanecek.cz">hi@daliborjanecek.cz</ButtonLink>
                    </div>

        </header>
    )
}

export default Header