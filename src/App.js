import React, { useEffect, useState } from 'react';
import HeaderBlock from './header block/HeaderBlock';
import Header from './header/Header';
import Menu from './side menu/Menu';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import { useSelector } from 'react-redux';
import TeslaProfile from './my profile/TeslaProfile';
import SignUp from './signup/SignUp';
import { auth } from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux store/userSlice';

const App = () => {

    const user = useSelector((state) => state.user.user)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return <div className='app'>
        <Routes>
            <Route path='/' element={<><Header menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></Header>{isMenuOpen && <Menu></Menu>}<HeaderBlock></HeaderBlock></>}>
            </Route>

            <Route path='/login' element={<>{user ? <Navigate replace to='/teslaaccount'></Navigate> : <Login></Login>}</>}></Route>

            <Route path='/signup' element={<SignUp test></SignUp>}></Route>

            <Route path='/teslaaccount' element={<>{!user ? <Navigate replace to='/login'></Navigate> : <TeslaProfile menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></TeslaProfile>}{isMenuOpen && <Menu></Menu>}</>}></Route>
        </Routes>
    </div>;
};

export default App;
