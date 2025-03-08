// src/components/EthicsReviewerDashboard.tsx
import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import ReviewerNavBar from '../Components/reviewernavbar';
import './reviewer_dashboard.css';
interface Application {
    id: number;
    title: string;
    supervisor: string;
}

const applications: Application[] = [
    { id: 1, title: "Research Ethics Application - AI for Healthcare", supervisor: "Dr. Alice Johnson" },
    { id: 2, title: "Research Ethics Application - Blockchain in Education", supervisor: "Dr. Bob Smith" },
];

const EthicsReviewerDashboard: React.FC = () => {
    return (
        <div className="app-container">
            <Header title="University Research Management System" userName="Ethics Reviewer" />
            <ReviewerNavBar />
            <main className="main-content">
                <div className="container">
                    <h2 className="heading">Ethics Review Requests</h2>

                    {/* Applications Displayed */}
                    <div className="applications-container">
                        {applications.length > 0 ? (
                            applications.map((application) => (
                                <div key={application.id} className="application-card">
                                    <h3 className="application-title">{application.title}</h3>
                                    <p className="application-supervisor">Supervisor: {application.supervisor}</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-applications">None</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EthicsReviewerDashboard;
