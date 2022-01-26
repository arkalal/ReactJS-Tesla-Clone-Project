import React from 'react';
import './TeslaAccountCard.css'
import ButtonPrimary from '../login/ButtonPrimary'
import ButtonSecondary from '../login/ButtonSecondary'

const TeslaAccountCard = ({ imgSrc, model, testDrive }) => {
    return <div className='card'>
        <div className="carImage">
            <img src={imgSrc} alt="" />
        </div>

        <h2 className="car-model"> {model} </h2>

        <div className="car-actions">
            <ButtonPrimary name='order'></ButtonPrimary>
            {testDrive && <ButtonSecondary name='Test Drive'></ButtonSecondary>}
        </div>

        <div className="car-info">
            <span>Request a Call</span> to speak with a product specialist, value
            your trade-in or apply for leasing
        </div>
    </div>;
};

export default TeslaAccountCard;
