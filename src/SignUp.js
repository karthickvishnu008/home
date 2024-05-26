import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [userType,] = useState('buyer'); 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !phoneNumber || !password) {
            alert('Please fill in all fields');
            return;
        }

        let users = JSON.parse(sessionStorage.getItem('users')) || [];

        if (users.some(user => user.email === email)) {
            alert('Email is already in use');
            return;
        }

        users.push({ firstName, lastName, email, phoneNumber, password, userType });

        sessionStorage.setItem('users', JSON.stringify(users));

        alert('User signed up successfully!');
        navigate('/login');
    };

    return (
        <body class="signupbody">
        <div className="Signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder="First Name"  type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    <input placeholder="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
          
                    <input placeholder="Email id" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>

                    <input placeholder="Phone number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
               
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
        </body>
    );
};

export default SignUp;
