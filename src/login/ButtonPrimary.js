import React from 'react';
import './ButtonPrimary.css'

const ButtonPrimary = ({ name, type, onClick }) => {
    return <div className='buttonPrimary' onClick={onClick} type={type}>
        {name}
    </div>;
};

export default ButtonPrimary;
