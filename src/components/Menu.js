import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { menuCategories } from '../content/content';
import "./Menu.css";


const Menu = () => {

    const location = useLocation(); // Získáme aktuální cestu

    // Zjistíme, zda jsme na kořenové cestě "/"
    const isRoot = location.pathname === "/";

  return (
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
  )
}

export default Menu