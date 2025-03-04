
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import './App.css';
import SupervisorDashboard from './Pages/supervisor_dashboard'; // Ensure the path is correct
import Dashboard from './Pages/dashboard';
import EthicsReviewerDashboard from './Pages/reviewer_dashboard';
import SupervisorEthics from './Pages/supervisor_ethics';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("Loading...");

    // Uncomment this if you want to fetch data from your API
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/ethics/hello/")
    //         .then(response => response.json())
    //         .then(data => setMessage(data.message))
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    return (
        <Router> {/* Wrap your application in Router */}
            {/* <div className="app-container"> */}
            {/* <Header title="University Research Management System" userName="John Doe" /> */}
            {/* <NavBar /> */}
            <main className="main-content">
                {/* <p>API Response: {message}</p> */}
                <Routes>
                    {/* Use the element prop correctly */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/ethics_reviewer" element={<EthicsReviewerDashboard />} />
                    <Route path="/supervisor" element={<SupervisorDashboard />} />
                    <Route path="/supervisor_ethics" element={<SupervisorEthics />} />

                    {/* Add more routes here as needed */}
                </Routes>
            </main>
            {/* <Footer /> */}
            {/* </div> */}
        </Router>
    );
};

export default App;