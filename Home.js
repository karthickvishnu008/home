import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('User logged out!');
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page after login.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
