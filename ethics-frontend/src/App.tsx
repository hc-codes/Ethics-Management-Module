import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Correct import
import './App.css';
import SupervisorDashboard from './Pages/supervisor_dashboard'; // Ensure the path is correct
import Dashboard from './Pages/dashboard';
import EthicsReviewerDashboard from './Pages/reviewer_dashboard';
import SupervisorEthics from './Pages/supervisor_ethics';
import LoginPage from './Pages/login';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("Loading...");

    return (
        <Router>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/ethics_reviewer" element={<EthicsReviewerDashboard />} />
                    <Route path="/supervisor" element={<SupervisorDashboard />} />
                    <Route path="/supervisor_ethics" element={<SupervisorEthics />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
