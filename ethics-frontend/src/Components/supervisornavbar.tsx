// src/components/NavBar.tsx
import React from 'react';
import './navBar.css'; // Optional: for styling

const SupervisorNavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="/">Students</a></li>
                <li className="nav-item"><a href="/supervisor_ethics">Ethics Application</a></li>
                <li className="nav-item"><a href="/grantapplication">Grant Application</a></li>
                <li className="nav-item"><a href="/notification">Notification</a></li>
                <li className="nav-item"><a href="/services">Services</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default SupervisorNavBar;