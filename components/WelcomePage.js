import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; 

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/buyer');
    };

    const handleSellClick = () => {
        navigate('/seller');
    };

    return (
        <div className="welcome-page">
            <h1 className='heading'>Welcome to Property Booking</h1>
            <div className="button-container">
                <button className="buy-button" onClick={handleBuyClick}>Buy a Property</button>
                <button className="sell-button" onClick={handleSellClick}>Sell a Property</button>
            </div>
        </div>
    );
};

export default WelcomePage;
