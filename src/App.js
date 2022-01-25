import React, { useState } from 'react';
import HeaderBlock from './header block/HeaderBlock';
import Header from './header/Header';
import Menu from './side menu/Menu';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import { useSelector } from 'react-redux';
import TeslaProfile from './my profile/TeslaProfile';
import SignUp from './signup/SignUp';

const App = () => {

    const user = useSelector((state) => state.user.user)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <div className='app'>
        <Routes>
            <Route path='/' element={<><Header menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></Header>{isMenuOpen && <Menu></Menu>}<HeaderBlock></HeaderBlock></>}>
            </Route>

            <Route path='/login' element={<>{user ? <TeslaProfile></TeslaProfile> : <Login></Login>}<Login></Login></>}></Route>

            <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>;
};

export default App;
