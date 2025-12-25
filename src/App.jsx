import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import CloudBackground from './components/CloudBackground';
import LoginPage from './components/LoginPage';
import ProfileSetup from './components/ProfileSetup';
import API_BASE_URL from './config';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [hasProfile, setHasProfile] = useState(null); // null = checking, true/false = result

    useEffect(() => {
        // Check for existing token on mount
        const token = localStorage.getItem('auth_token');
        if (token) {
            setAuthToken(token);
            setIsLoggedIn(true);
            checkProfile(token);
        }
    }, []);

    const checkProfile = async (token) => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            setHasProfile(data.profile !== null);
        } catch (err) {
            console.error('Profile check error:', err);
            setHasProfile(false);
        }
    };

    const handleLogin = (token) => {
        setAuthToken(token);
        setIsLoggedIn(true);
        checkProfile(token);
    };

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        setAuthToken(null);
        setIsLoggedIn(false);
        setHasProfile(null);
    };

    const handleProfileComplete = () => {
        setHasProfile(true);
    };

    // Show login page if not logged in
    if (!isLoggedIn) {
        return (
            <div className="app-container">
                <CloudBackground />
                <LoginPage onLogin={handleLogin} />
            </div>
        );
    }

    // Show profile setup if logged in but no profile
    if (hasProfile === false) {
        return (
            <div className="app-container">
                <CloudBackground />
                <ProfileSetup authToken={authToken} onComplete={handleProfileComplete} />
            </div>
        );
    }

    // Show chat interface if logged in and has profile
    if (hasProfile === true) {
        return (
            <div className="app-container">
                <CloudBackground />
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                    <ChatInterface authToken={authToken} onLogout={handleLogout} />
                </div>
            </div>
        );
    }

    // Loading state
    return (
        <div className="app-container">
            <CloudBackground />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#039be5',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                加载中...
            </div>
        </div>
    );
}

export default App;
