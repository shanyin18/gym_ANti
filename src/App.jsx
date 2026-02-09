import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import CloudBackground from './components/CloudBackground';
import LoginPage from './components/LoginPage';
import ProfileSetup from './components/ProfileSetup';
import LandingAnimation from './components/LandingAnimation';
import API_BASE_URL from './config';

function App() {
    const [showLanding, setShowLanding] = useState(false); // 默认关闭开场动画，直接进入登录/聊天页
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [hasProfile, setHasProfile] = useState(null);

    console.log('App State:', { isLoggedIn, showLanding, hasProfile }); // 调试用：查看当前状态

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

            if (res.status === 401 || res.status === 403) {
                // Token invalid or expired
                handleLogout();
                return;
            }

            if (!res.ok) {
                throw new Error(`Server status: ${res.status}`);
            }

            const data = await res.json();
            setHasProfile(data.profile !== null);
        } catch (err) {
            console.error('Profile check error:', err);
            // If network error or other issue, default to logout for safety
            // avoiding "stuck in profile setup" if server is down
            handleLogout();
        }
    };

    const handleLandingComplete = () => {
        setShowLanding(false);
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

    // Show landing animation first (if enabled)
    if (showLanding) {
        return <LandingAnimation onComplete={handleLandingComplete} />;
    }

    // CRITICAL: If not logged in, ALWAYS show login page
    if (!isLoggedIn) {
        return (
            <div className="app-container">
                <CloudBackground />
                <LoginPage onLogin={handleLogin} />
            </div>
        );
    }

    // Show profile setup if logged in but no profile
    if (isLoggedIn && hasProfile === false) {
        return (
            <div className="app-container">
                <CloudBackground />
                <ProfileSetup authToken={authToken} onComplete={handleProfileComplete} onLogout={handleLogout} />
            </div>
        );
    }

    // Show chat interface if logged in and has profile
    if (isLoggedIn && hasProfile === true) {
        return (
            <div className="app-container">
                <CloudBackground />
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <ChatInterface authToken={authToken} onLogout={handleLogout} />
                </div>
            </div>
        );
    }

    // Loading state (only shown briefly when we HAVE a token and are checking profile)
    if (authToken && hasProfile === null) {
        return (
            <div className="app-container">
                <CloudBackground />
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    color: '#039be5', fontSize: '18px', fontWeight: 'bold'
                }}>
                    正在同步您的数据...
                </div>
            </div>
        );
    }

    // Default to Login Page if anything else fails
    return (
        <div className="app-container">
            <CloudBackground />
            <LoginPage onLogin={handleLogin} />
        </div>
    );
}

export default App;
