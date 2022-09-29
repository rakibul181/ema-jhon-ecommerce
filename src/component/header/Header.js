import React from 'react';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <nav className='header'>
             <img src={logo} alt="" srcset="" />
             <div className='nav-item'>
                <a href="/home">HOME</a>
                <a href="/order">ORDER</a>
                <a href="/review">REVIEW</a>
                <a href="/invertoey">INVENTORY</a>
                <a href="/login">LOGIN</a>
             </div>
        </nav>
    );
};

export default Header;