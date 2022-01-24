import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';

const Login = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
    }

    return <div className='login'>
        <div className="login-header">
            <div className="login-logo">
                <Link to='/'>
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </div>

            <div className="login-language">
                <LanguageOutlinedIcon></LanguageOutlinedIcon> <span>en-US</span>
            </div>
        </div>

        <div className="login-info">
            <h1>Sign In</h1>

            <form action="" className="login-form">
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={Password} onChange={(e) => { setPassword(e.target.value) }} />

                <ButtonPrimary name='SignIn' type='submit' onClick={signIn}></ButtonPrimary>
            </form>
        </div>
    </div>;
};

export default Login;
