import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyFilter from './PropertyFilter';
import buyerData from '../data/buyerData';
import './BuyerPage.css';

const PropertyList = () => {
    const [filters, setFilters] = useState({
        bedRooms: '',
        bathrooms: '',
        area: '',
        place: ''
    });

    const handleFilterChange = (name, value) => {
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const filteredProperties = buyerData.filter(property => {
        return (
            (filters.bedRooms === '' || property.bedRooms === parseInt(filters.bedRooms)) &&
            (filters.bathrooms === '' || property.bathrooms === parseInt(filters.bathrooms)) &&
            (filters.area === '' || property.area.toLowerCase().includes(filters.area.toLowerCase())) &&
            (filters.place === '' || property.place.toLowerCase().includes(filters.place.toLowerCase()))
        );
    });

    return (
        <div className="property-list-page">
            <PropertyFilter filters={filters} onFilterChange={handleFilterChange} />
            <div className="property-list">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.pid} property={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertyList;
