import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const API_BASE_URL = "http://127.0.0.1:8000/users"; // Adjust if needed

const DEPARTMENTS = [
    "Faculty of Arts, Humanities and Social Sciences",
    "Faculty of Education and Health Sciences",
    "Kemmy Business School",
    "Faculty of Science and Engineering",
    "Irish World Academy of Music and Dance",
];

const LoginPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<"supervisor" | "reviewer">("supervisor");
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [department, setDepartment] = useState(DEPARTMENTS[0]); // Default to first department
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleTabChange = (tab: "supervisor" | "reviewer") => {
        setSelectedTab(tab);
        setIsRegistering(false);
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (isRegistering && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const endpoint = isRegistering ? `${API_BASE_URL}/register` : `${API_BASE_URL}/login`;
        const payload = isRegistering
            ? { username, email, password, role: selectedTab, department }
            : { username, password };

        try {
            const response = await axios.post(endpoint, payload);
            console.log("Response:", response.data);

            if (!isRegistering) {
                // Store tokens
                sessionStorage.setItem("auth_token", response.data.access);
                sessionStorage.setItem("refresh_token", response.data.refresh);
                alert("Login successful!");

                // Redirect to the appropriate dashboard
                navigate(selectedTab === "supervisor" ? "/supervisor" : "/ethics_reviewer");
            } else {
                alert("Registration successful! You can now log in.");
                navigate(selectedTab === "supervisor" ? "/supervisor" : "/ethics_reviewer");
                setIsRegistering(false);
            }
        } catch (err: any) {
            console.error("API Error:", err.response?.data || err.message);
            setError(err.response?.data.error || "Something went wrong.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="tabs">
                    <button
                        className={`tab ${selectedTab === "supervisor" ? "active" : ""}`}
                        onClick={() => handleTabChange("supervisor")}
                    >
                        Supervisor
                    </button>
                    <button
                        className={`tab ${selectedTab === "reviewer" ? "active" : ""}`}
                        onClick={() => handleTabChange("reviewer")}
                    >
                        Reviewer
                    </button>
                </div>

                <h2 className="form-header">
                    {isRegistering ? "Register" : "Login"} as {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
                </h2>

                {error && <p className="error-message">{error}</p>}

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                    )}

                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                                {DEPARTMENTS.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <button type="submit" className="submit-button">{isRegistering ? "Register" : "Login"}</button>

                    <p className="toggle-link" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
