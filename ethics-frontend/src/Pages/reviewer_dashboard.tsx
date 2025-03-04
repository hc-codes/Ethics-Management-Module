// src/components/SupervisorDashboard.tsx
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import ReviewerNavBar from '../Components/reviewernavbar';

const EthicsReviewerDashboard: React.FC = () => {
    return (
        <div className="app-container">
            <Header title="University Research Management System" userName="Ethics Reviewer" />
            <ReviewerNavBar />
            <main className="main-content">

            </main>
            <Footer />
        </div>
    );
};

export default EthicsReviewerDashboard;