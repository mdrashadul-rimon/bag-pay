import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-text'>Bag Pay</h1>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;