import React from 'react';
import logo from '../../images/citizen-watch-logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img className='custom-logo' src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Technology</a>
                <a href="/about">Brand</a>
            </div>
        </nav>
    );
};

export default Header;