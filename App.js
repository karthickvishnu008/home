import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
import WelcomePage from './components/WelcomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/seller" element={<SellerPage />} />
                <Route path="/buyer" element={<BuyerPage />} />
                <Route path="/welcomePage" element={<WelcomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
