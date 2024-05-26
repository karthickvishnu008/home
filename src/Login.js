import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
        const user = storedUsers.find(u => u.email === email && u.password === password);


        
        if (user) {
            alert('User logged in successfully!');
            navigate('/welcomePage');
        } else {
            alert('Invalid email or password');
        }

    };

    return (
        <body class="loginbody">
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    {/* Email:  */}
                    
                    <input placeholder="Email Id " type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                 {/* <br /> */}
                <label>
                {/* Password: */}
                
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                
               
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/">Sign up here</Link></p>
        </div>
        </body>
    );
};


export default Login;
