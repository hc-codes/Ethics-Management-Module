// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>All content on this site: Copyright © 2025 University of Limerick, its licensors, and contributors. All rights are reserved, including those for text and data mining, AI training, and similar technologies. For all open access content, the relevant licensing terms apply.</p>
                <p>We use cookies to help provide and enhance our service and tailor content. By continuing you agree to the use of cookies.</p>
                <div className="footer-links">
                    <a href="/data-protection-policy">University of Limerick data protection policy</a>
                    <span> | </span>
                    <a href="/web-accessibility">About web accessibility</a>
                    <span> | </span>
                    <a href="/report-vulnerability">Report vulnerability</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;