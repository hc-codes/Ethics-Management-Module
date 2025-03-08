// import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import React, { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:8000/users"; // Change this if your backend runs on a different URL

const LoginPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<"supervisor" | "reviewer">("supervisor");
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleTabChange = (tab: "supervisor" | "reviewer") => {
        setSelectedTab(tab);
        setIsRegistering(false); // Reset to login if tab changes
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (isRegistering && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const endpoint = isRegistering ? `${API_BASE_URL}/register` : `${API_BASE_URL}/login/`;
        const payload = { username: email, password };

        try {
            const response = await axios.post(endpoint, payload);
            console.log("Response:", response.data);

            if (!isRegistering) {
                // Store tokens in local storage after login
                localStorage.setItem("access_token", response.data.access);
                localStorage.setItem("refresh_token", response.data.refresh);
                alert("Login successful!");
            } else {
                alert("Registration successful! You can now log in.");
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
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                    )}
                    {/* {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <input type="string" id="department" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                    )} */}
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
