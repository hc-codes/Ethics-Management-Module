// src/components/LoginPage.tsx
import React, { useState } from 'react';
import './login.css';
const LoginPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'supervisor' | 'reviewer'>('supervisor');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleTabChange = (tab: 'supervisor' | 'reviewer') => {
        setSelectedTab(tab);
        setIsRegistering(false); // Reset to login if tab changes
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="tabs">
                    <button
                        className={`tab ${selectedTab === 'supervisor' ? 'active' : ''}`}
                        onClick={() => handleTabChange('supervisor')}
                    >
                        Supervisor
                    </button>
                    <button
                        className={`tab ${selectedTab === 'reviewer' ? 'active' : ''}`}
                        onClick={() => handleTabChange('reviewer')}
                    >
                        Reviewer
                    </button>
                </div>

                <h2 className="form-header">{isRegistering ? 'Register' : 'Login'} as {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</h2>

                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="form-group">
                        {isRegistering ? (
                            <>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" required />
                            </>
                        ) : null}
                    </div>

                    <button type="submit" className="submit-button">{isRegistering ? 'Register' : 'Login'}</button>

                    <p className="toggle-link" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
