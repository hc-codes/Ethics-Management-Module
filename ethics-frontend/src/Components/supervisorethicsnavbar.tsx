// src/components/NavBar.tsx
import React from 'react';
import './navbar.css'; // Optional: for styling

const SupervisorEthicsNavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="/supervisor">Home</a></li>
                <li className="nav-item"><a href="/supervisor_ethics">Apply</a></li>
                <li className="nav-item"><a href="/supervisor_applications">Applications</a></li>
                <li className="nav-item"><a href="/notification">Notifications</a></li>
                <li className="nav-item"><a href="/services">Services</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default SupervisorEthicsNavBar;