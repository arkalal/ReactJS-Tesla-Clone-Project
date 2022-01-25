import React from 'react';
import './ButtonSecondary.css'

const ButtonSecondary = ({ name, type, onClick, secondoryManipulate }) => {
    return <button className={secondoryManipulate ? 'buttonSecondary-Manipulate' : 'buttonSecondary'}>
        {name}
    </button>;
};

export default ButtonSecondary;
