import React from 'react';
import './Header.css'
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
    return <div className='header'>
        <div className="header-logo">
            <BrowserRouter>
                <Link to='/'>
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </BrowserRouter>
        </div>
    </div>;
};

export default Header;
