import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import { login } from '../redux store/userSlice'

const Login = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(Email, Password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))

            navigate('/teslaaccount')
        }).catch((error) => {
            alert(error)
        })
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

                <ButtonPrimary name='Sign In' type='submit' onClick={signIn}></ButtonPrimary>
            </form>

            <div className="login-divider">
                <hr /> <span>OR</span> <hr />
            </div>

            <Link to='/signup'>
                <ButtonSecondary name='create account'></ButtonSecondary>
            </Link>
        </div>
    </div>;
};

export default Login;
