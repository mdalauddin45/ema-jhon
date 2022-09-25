import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img alt='' src={logo}></img>
           <div>
            <a href="/Oder">Order</a>
            <a href="/Oder Review">Oder Review</a>
            <a href="/Manage Inventory">Manage Inventory</a>
            <a href="/Login">Login</a>
           </div>
        </nav>
    );
};

export default Header;