import React, { useState } from 'react';
import Header from './header/Header';

const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <div>
        <Header menuOpen={isMenuOpen} setMenu={setIsMenuOpen}></Header>
        {/* Header Block */}
    </div>;
};

export default App;
