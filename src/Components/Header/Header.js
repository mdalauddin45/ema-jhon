import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img alt='' src={logo}></img>
        </nav>
    );
};

export default Header;