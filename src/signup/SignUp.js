import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from '../login/ButtonPrimary';
import ButtonSecondary from '../login/ButtonSecondary';
import { auth } from '../firebase/firebase';

const SignUp = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createAccount = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(Email, Password)
    }

    return <div className='signup'>
        <div className="signup-header">
            <div className="signup-logo">
                <Link to='/'>
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </div>

            <div className="signup-language">
                <LanguageOutlinedIcon></LanguageOutlinedIcon> <span>en-US</span>
            </div>
        </div>

        <div className="signup-info">
            <h1>Create Account</h1>

            <form action="" className="signup-form">
                <label htmlFor="fname">First Name</label>
                <input type="text" id='fname' value={fName} onChange={(e) => { setFname(e.target.value) }} />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id='lname' value={lName} onChange={(e) => { setLname(e.target.value) }} />

                <label htmlFor="email">Email Address</label>
                <input type="email" id='email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={Password} onChange={(e) => { setPassword(e.target.value) }} />

                <ButtonPrimary name='create account' type='submit' onClick={createAccount}></ButtonPrimary>
            </form>

            <div className="signup-divider">
                <hr /> <span>OR</span> <hr />
            </div>

            <Link to='/login'>
                <ButtonSecondary name='Sign In' secondoryManipulate></ButtonSecondary>
            </Link>
        </div>
    </div>;
};

export default SignUp;
