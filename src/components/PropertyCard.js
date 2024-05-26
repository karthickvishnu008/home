import React, { useState } from 'react';
import bedIcon from '../images/bed-solid.svg';  
import bathIcon from '../images/bath-solid.svg';
import './BuyerPage.css';


const PropertyCard = ({ property }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isInterested, setIsInterested] = useState(false);
    const [showBuyPopup, setShowBuyPopup] = useState(false);
    const [email, setEmail] = useState('');

    const handleLikeClick = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleInterestedClick = () => {
        setIsInterested(true);
    };

    const handleBuyClick = () => {
        setShowBuyPopup(true);
    };

    const handleBuySubmit = () => {
        setShowBuyPopup(false);
    };

    return (
        <div classname="row">
        <div className="property-card">
        
            <img src={property.propertyImgUrl} alt={property.ownername} />
            <div className="property-details">
                <div className="property-icons">
                    <span>
                        <img src={bedIcon} alt="Bedrooms" /> {property.bedRooms}
                    </span>
                    <span>
                        <img src={bathIcon} alt="Bathrooms" /> {property.bathrooms}
                    </span>
                </div>
                <p><strong>Place:</strong> {property.place}</p>
                <p><strong>Area:</strong> {property.area}</p>
                <div>
                    <button className="buy-button" onClick={handleBuyClick}>Buy</button>
                </div>
                {showBuyPopup && (
                    <div className="buy-popup">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleBuySubmit}>Submit</button>
                    </div>
                )}
                <div>
                    <button onClick={handleLikeClick} className={isLiked ? 'liked' : ''}>Like</button>
                    <span>{likeCount}</span>
                </div>
                {!isInterested && (
                    <button onClick={handleInterestedClick}>I'm Interested</button>
                )}
                {isInterested && (
                    <p>Thank you for showing interest!</p>
                )}
            </div>
         </div>
        </div>
    );
};

export default PropertyCard;







