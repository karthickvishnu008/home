import React, { useState } from 'react';
import buyerData from '../data/buyerData';
import { useNavigate } from 'react-router-dom'; 
import './SellerPage.css';


const SellerPage = () => {
    const navigate = useNavigate();

    const [propertyDetails, setPropertyDetails] = useState({
        area: '',
        place: '',
        bedrooms: '',
        bathrooms: '',
        contactEmail: '',
        contactPhone: '',
        imageUrl: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            propertyDetails.area &&
            propertyDetails.place &&
            propertyDetails.bedrooms &&
            propertyDetails.bathrooms &&
            propertyDetails.contactEmail &&
            propertyDetails.imageUrl
        ) {
            buyerData.push({
                area: propertyDetails.area,
                place: propertyDetails.place,
                bedrooms: propertyDetails.bedrooms,
                bathrooms: propertyDetails.bathrooms,
                ownername: propertyDetails.contactEmail, 
                propertyImgUrl: propertyDetails.imageUrl
            });
    
            setShowPopup(true);
        } else {
            alert('Please fill in all the required fields.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPropertyDetails({
            ...propertyDetails,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPropertyDetails({
                ...propertyDetails,
                imageUrl: reader.result
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleClosePopup = () => {
        setShowPopup(false); 
        navigate('/buyer'); 
    };
    return (
        <div className="seller-page">
            <h2>Sell Your Property</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    
                    <input
                    placeholder='Area'
                        type="text"
                        name="area"
                        value={propertyDetails.area}
                        onChange={handleChange}
                    />
                </label>
                <label>
                 
                    <input
                    placeholder='Place'
                        type="text"
                        name="place"
                        value={propertyDetails.place}
                        onChange={handleChange}
                    />
                </label>
                <label>
                   
                    <input
                    placeholder='Bedrooms'
                        type="number"
                        name="bedrooms"
                        value={propertyDetails.bedrooms}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    
                    <input
                    placeholder='Bathrooms'
                        type="number"
                        name="bathrooms"
                        value={propertyDetails.bathrooms}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    
                    <input
                    placeholder='Contact Email'
                        type="email"
                        name="contactEmail"
                        value={propertyDetails.contactEmail}
                        onChange={handleChange}
                    />
                </label>
                <label>

                    <input
                    placeholder='Contact Phone'
                        type="tel"
                        name="contactPhone"
                        value={propertyDetails.contactPhone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {propertyDetails.imageUrl && (
                <img src={propertyDetails.imageUrl} alt="Property" style={{ maxWidth: '300px', marginTop: '20px' }} />
            )}
            {showPopup && (
                <div className="success-popup">
                    <p>Congratulations! Your property has been successfully added.</p>
                    <button onClick={() => {handleClosePopup()}}>Close</button>
                </div>
            )}
        </div>
    );

    
};

export default SellerPage;


