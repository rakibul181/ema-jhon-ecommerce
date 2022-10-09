import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <nav className='header'>
             <img src={logo} alt="" srcset="" />
             <div className='nav-item'>
                <Link to="/shop">SHOP</Link>
                <Link to="/order">ORDER</Link>
                <Link to="/invertoey">INVENTORY</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/login">LOGIN</Link>
             </div>
        </nav>
    );
};

export default Header;