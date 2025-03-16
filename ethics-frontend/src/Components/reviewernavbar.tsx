// src/components/NavBar.tsx
import React from 'react';
import './navbar.css'; // Optional: for styling

const ReviewerNavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="/dashboard">Home</a></li>
                <li className="nav-item"><a href="/Students">Students</a></li>
                <li className="nav-item"><a href="/ethics_reviewer">Applications</a></li>
                <li className="nav-item"><a href="/approvedapplication">Approved Application</a></li>
                <li className="nav-item"><a href="/notification">Notification</a></li>
                <li className="nav-item"><a href="/services">Services</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default ReviewerNavBar;