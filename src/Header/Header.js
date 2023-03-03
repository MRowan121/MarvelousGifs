import React from "react";
import './Header.css'
import logo from '../Images/myLogo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to={'/'} tabIndex={-1}>
                <img className="logo" src={logo} alt='marvelous gifs logo' />
            </Link>
        </header>
    )
}

export default Header;