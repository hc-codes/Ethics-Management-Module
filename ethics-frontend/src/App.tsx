import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Use Navigate
import "./App.css";
import SupervisorDashboard from "./Pages/supervisor_dashboard";
import Dashboard from "./Pages/dashboard";
import EthicsReviewerDashboard from "./Pages/reviewer_dashboard";
import SupervisorEthics from "./Pages/supervisor_ethics";
import LoginPage from "./Pages/login";

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("Loading...");

    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ethics_reviewer" element={<EthicsReviewerDashboard />} />
                <Route path="/supervisor" element={<SupervisorDashboard />} />
                <Route path="/supervisor_ethics" element={<SupervisorEthics />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default App;
