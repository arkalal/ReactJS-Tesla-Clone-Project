import React, { useState } from 'react';
import HeaderBlock from './header block/HeaderBlock';
import Header from './header/Header';
import Menu from './side menu/Menu';

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <div>
        <Header menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></Header>
        {isMenuOpen && <Menu></Menu>}
        <HeaderBlock></HeaderBlock>
    </div>;
};

export default App;
