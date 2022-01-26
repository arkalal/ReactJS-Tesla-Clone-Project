import React from 'react';
import { Link } from 'react-router-dom';
import './TeslaProfile.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import TeslaAccountCard from './TeslaAccountCard';
import { logout } from '../redux store/userSlice';

const TeslaProfile = ({ menuOpen, setMenu }) => {

    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    const logOut = (e) => {
        e.preventDefault()

        dispatch(logout())
    }

    return <div className='teslaAccount'>
        <div className="teslaAccount-header">
            <div className="teslaAccount-logo">
                <Link to='/'>
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </div>

            <div className="teslaAccount-links">
                <Link to='/teslaaccount'>Model S</Link>
                <Link to='/teslaaccount'>Model 3</Link>
                <Link to='/teslaaccount'>Model x</Link>
                <Link to='/teslaaccount'>Model y</Link>
                <Link to='/teslaaccount'>Solar Roof</Link>
                <Link to='/teslaaccount'>Solar Panels</Link>
                <Link to='/teslaaccount'>Shop</Link>
                <Link to='/teslaaccount'>Tesla Account</Link>
                <Link to='/' onClick={logOut}>Log Out</Link>

                <div className="teslaAccount-menu" onClick={() => { setMenu(!menuOpen) }}>
                    {menuOpen ? <CloseIcon className='closeOpen crossMark'></CloseIcon> : <MenuIcon className='closeOpen'></MenuIcon>}
                </div>
            </div>
        </div>

        <div className="teslaAccount-info">
            <div className="teslaAccount-person">
                <h4> {user?.displayName + "'s"} </h4>
            </div>

            <div className="teslaAccount-infoRight">
                <Link to='/teslaaccount'>Home</Link>
                <Link to='/teslaaccount'>Account</Link>
                <Link to='/teslaaccount'>History</Link>
                <Link to='/' onClick={logOut}>Sign Out</Link>
            </div>
        </div>

        <div className="teslaAccount-card">
            <TeslaAccountCard imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815' model='model s' testDrive></TeslaAccountCard>
            <TeslaAccountCard imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' model='model x'></TeslaAccountCard>
        </div>
    </div>;
};

export default TeslaProfile;
