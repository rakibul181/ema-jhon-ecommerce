import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <Link to="/shop">SHOP</Link>
                <Link to="/order">ORDER</Link>
                <Link to="/invertoey">INVENTORY</Link>
                <Link to="/about">ABOUT</Link>

                {
                    user?.email ? <>
                        <Link onClick={userLogOut} to={'/'}>Log Out</Link>
                        <p>{user.email}</p>
                    </>
                        :
                        <>
                            <Link to="/login">LOGIN</Link>
                            <Link to="/resister">RESISTER</Link>
                        </>
                }

            </div>
        </nav>
    );
};

export default Header;