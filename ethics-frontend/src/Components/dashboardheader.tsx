// src/components/Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboardheader.css'; // Ensure styling

interface HeaderProps {
    title: string;
    userName?: string; // Optional, to handle login/logout state
}

const DashboardHeader: React.FC<HeaderProps> = ({ title, userName }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // Redirect to login page
    };

    const handleLogout = () => {
        // Handle logout logic (e.g., clearing session, redirecting)
        console.log('User logged out');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            <div className="user-info">
                {userName ? (
                    <>
                        <span className="user-name">Welcome, {userName}</span>
                        <button className="auth-button logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button className="auth-button login-button" onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default DashboardHeader;
