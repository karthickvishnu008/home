import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './profil.css';

const PropertyFilter = ({ onFilterChange }) => {
    const [filterOption, setFilterOption] = useState('place');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate(); 

    const handleFilterChange = () => {
        onFilterChange(filterOption, searchValue);
    };

    const handleOptionChange = (e) => {
        setFilterOption(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchValue('');
        onFilterChange('', '');
    };

    const handleLogout = () => {
        navigate('/login'); 
    };

    return (
        <div className="property-filter">
            <select value={filterOption} onChange={handleOptionChange}>
                <option value="place">Place</option>
                <option value="area">Area</option>
                <option value="bedRooms">Bedrooms</option>
                <option value="bathrooms">Bathrooms</option>
            </select>
            <input
                type="text"
                placeholder={`Search by ${filterOption}`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleFilterChange();
                    }
                }}
            />
            <button type="button" onClick={handleFilterChange}>Search</button>
           
            <button type="button" onClick={handleClearSearch}>Clear Search</button>
            
            <button type="button" onClick={handleLogout}>Logout</button> {}
        </div>
    );
};

export default PropertyFilter;
