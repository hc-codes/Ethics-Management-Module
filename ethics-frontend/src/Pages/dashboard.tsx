import Footer from '../components/footer';
import Header from '../components/header';
import NavBar from '../components/navbar';
import React, { useState } from "react";
import './dashboard.css';
import DashboardHeader from '../Components/dashboardheader';

const departments = [
    {
        name: "Faculty of Arts, Humanities and Social Sciences",
        schools: [
            "School of English, Irish, and Communication",
            "School of Law",
            "School of Modern Languages & Applied Linguistics",
        ],
    },
    {
        name: "Faculty of Education and Health Sciences",
        schools: [
            "School of Medicine",
            "School of Allied Health",
            "School of Education",
        ],
    },
    {
        name: "Kemmy Business School",
        schools: [
            "Department of Economics",
            "Department of Accounting & Finance",
            "Department of Management & Marketing",
        ],
    },
    {
        name: "Faculty of Science and Engineering",
        schools: [
            "School of Engineering",
            "School of Natural Sciences",
            "School of Computer Science & Information Systems",
        ],
    },
    {
        name: "Irish World Academy of Music and Dance",
        schools: [
            "School of Music Performance",
            "School of Dance & Cultural Studies",
        ],
    },
];

const Dashboard: React.FC = () => {
    const [search, setSearch] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Function to toggle department dropdown
    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="app-container">
            <DashboardHeader title="University Research Management System" />
            <NavBar />
            <main className="main-content">
                <div className="max-w-6xl mx-auto p-6">

                    {/* Search Bar */}
                    <div className="parent-container">
                        <h2 className="search-header">Discover research at University of Limerick</h2>

                        <div className="search-container">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search for thesis and articles"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="search-input"
                                />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* Department Toggle List */}
                    <div className="department-container">
                        <div className="department-list">
                            {departments.map((dept, index) => (
                                <div key={index} className="department-item">
                                    <div
                                        className="department-header"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <h2 className="department-name">{dept.name}</h2>
                                        <span className="toggle-icon">
                                            {openIndex === index ? "▲" : "▼"}
                                        </span>
                                    </div>

                                    {openIndex === index && (
                                        <ul className="school-list">
                                            {dept.schools.map((school, i) => (
                                                <li key={i} className="school-item">• {school}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;