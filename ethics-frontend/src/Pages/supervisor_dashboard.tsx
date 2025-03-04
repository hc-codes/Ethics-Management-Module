// src/components/SupervisorDashboard.tsx
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import SupervisorNavBar from '../Components/supervisornavbar';
import { Link } from 'react-router-dom';

const SupervisorDashboard: React.FC = () => {
    return (
        <div className="app-container">
            <Header title="University Research Management System" userName="SuperVisor" />
            <SupervisorNavBar />
            <main className="main-content">
                <h1> hi Suoervisor</h1>
            </main>
            <Footer />
        </div>
    );
};

export default SupervisorDashboard;