import React from 'react';
import './Header.css'
import { BrowserRouter, Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ menuOpen, setMenu }) => {

    const menuToggle = () => {
        setMenu(!menuOpen)
    }

    return <div className='header'>
        <div className="header-logo">
            <BrowserRouter>
                <Link to='/'>
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </BrowserRouter>
        </div>

        <div className="header-links">
            <BrowserRouter>
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model x</Link>
                <Link to='/'>Model y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solar Panels</Link>
            </BrowserRouter>
        </div>

        <div className="header-right">
            <BrowserRouter>
                <Link to='/' className={menuOpen && 'header-linkHidden'}>Shop</Link>
                <Link to='/login' className={menuOpen && 'header-linkHidden'}>Tesla Account</Link>
            </BrowserRouter>

            <div className="header-menu" onClick={menuToggle}>
                {menuOpen ? <CloseIcon className='closeOpen'></CloseIcon> : <MenuIcon className='closeOpen'></MenuIcon>}
            </div>
        </div>
    </div>;
};

export default Header;
