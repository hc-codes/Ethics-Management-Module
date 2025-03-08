// src/components/SupervisorDashboard.tsx
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import SupervisorNavBar from '../components/supervisornavbar';
import './supervisor_dashboard.css'
interface Student {
    id: number;
    name: string;
}

const students: Student[] = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
];

const SupervisorDashboard: React.FC = () => {
    return (
        <div className="app-container">
            <Header title="University Research Management System" userName="Supervisor" />
            <SupervisorNavBar />
            <main className="main-content">
                <div className="student-container">
                    <h2 className="heading">Pending Supervision Requests</h2>
                    <hr />
                    {/* Student List as Bordered List */}
                    <div className="student-list">
                        {students.map((student) => (
                            <div key={student.id} className="student-item">
                                <div className="student-info">
                                    <span className="student-name">{student.name}</span>
                                    <a href={`/students/${student.id}`} className="view-details">
                                        View Details →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SupervisorDashboard;
