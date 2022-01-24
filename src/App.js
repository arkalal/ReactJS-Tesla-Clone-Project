import React, { useState } from 'react';
import Header from './header/Header';
import Menu from './side menu/Menu';

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <div>
        <Header menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></Header>
        {isMenuOpen && <Menu></Menu>}
        {/* Header Block */}
    </div>;
};

export default App;
