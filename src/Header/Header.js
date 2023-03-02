import React from "react";
import './Header.css'
import logo from '../Images/myLogo.png'

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt='marvelous gifs logo' />
        </header>
    )
}

export default Header;