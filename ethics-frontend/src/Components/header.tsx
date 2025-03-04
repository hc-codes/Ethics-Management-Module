// src/components/Header.tsx
import React from 'react';
import './Header.css'; // Optional: for styling

interface HeaderProps {
    title: string;
    userName: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName }) => {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            <div className="user-info">
                <span className="user-name">Welcome, {userName}</span>
                <button className="logout-button">Logout</button>
            </div>
        </header>
    );
};

export default Header;