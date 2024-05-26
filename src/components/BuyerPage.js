import React from 'react';

import PropertyList from './PropertyList';
import './BuyerPage.css';


const PropertyCard = ({ property }) => {
    return (
        
        <div className="property-card">
        
        <PropertyList />
        </div>
        
    );
};

export default PropertyCard;
