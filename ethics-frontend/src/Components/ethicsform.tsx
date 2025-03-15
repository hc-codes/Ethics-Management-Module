import React, { useState } from "react";
import './form.css';

const EthicsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        clarifications: "",
        applicationtitle: "",
        applicationnumber: "",
        supervisorName: "",
        supervisorEmail: "",
        applicantName: "",
        applicantEmail: "",
        projectTitle: "",
        startDate: "",
        endDate: "",
        supervisorDeclaration: "",
        declarationDate: "",
        humanParticipants: {
            vulnerablePersons: false,
            under18: false,
            patients: false,
            staff: false,
        },
        subjectMatter: {
            sensitiveIssues: false,
            illegalActivities: false,
            selfRespectRisk: false,
        },
    });
    const [files, setFiles] = useState<File[]>([]);



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    const handleFileRemove = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCheckboxChange = (category: "humanParticipants" | "subjectMatter", field: string) => {
        setFormData((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [field]: !prev[category][field],
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted", formData);
    };

    return (
        <div className="form-container">
            {/* Disclaimer Section */}
            <div className="disclaimer-section">
                <p className="disclaimer-text">
                    <strong>Thank you for engaging with the Faculty of Science & Engineering Research Ethics application process.</strong> Please read the following in full before proceeding with your application:
                </p>
                <p className="disclaimer-text">
                    Please note that all Health Research oversight on behalf of the University of Limerick is undertaken by the Health Research Oversight Committee (HROC). The HROC First Contact Questionnaire can be found <a href="#" className="link">here</a>. The HROC reports to the University Research Committee (URC), chaired by the VPR. If you are conducting health research, you must engage with the HROC prior to or in parallel with submitting this application. For more information, please see the <a href="#" className="link">UL Health Research Policy</a>.
                </p>
                <p className="disclaimer-text">
                    If this study involves patients or staff from a clinical, hospital, or GP setting then you <strong>MUST</strong> apply to the relevant Ethics Committee where the patients or staff are based (for example, if you are working with patients in UHL, you will need HSE ethics approval).
                </p>
                <p className="disclaimer-text">
                    If this is a new application, please proceed to <strong>Section B</strong>.
                    If this is an existing application which requires clarification, please proceed to <strong>Section A</strong>.
                </p>
            </div>

            {/* Supervisor Declaration
            <div className="supervisor-declaration-section">
                <h3 className="section-title">Supervisor/Principal Investigator Declaration</h3>
                <p className="section-text">
                    I, the undersigned, hereby declare that this submission is entirely the work of my own and my research team (i.e., students, collaborating staff, etc.). I understand the ethical implications of my research and this work meets, to the best of my knowledge, the requirements of the Faculty of Science & Engineering Research Ethics Committee. I confirm that I have reviewed this application and agree to its submission for review.
                </p>

                <div className="form-input-group">
                    <label className="form-label">Supervisor/Principal Investigator*:</label>
                    <input type="text" name="supervisorDeclaration" value={formData.supervisorDeclaration} onChange={handleChange} className="form-input" required placeholder="Type your name " />

                    <label className="form-label">Date:</label>
                    <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="form-input" required />
                </div>
            </div> */}

            {/* Clarifications Section */}
            <div className="clarifications-section">
                <h2 className="section-title">SECTION A</h2>
                <p className="section-text">
                    Please ensure <strong>Track Changes</strong> is enabled (in the Review tab above) before addressing the below clarifications.
                </p>
                <p className="section-text">
                    <strong>Clarifications:</strong>
                </p>
                <textarea
                    name="clarifications"
                    value={formData.clarifications}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={10}
                    placeholder="Enter clarifications here..."
                />

                <p className="section-text">
                    <strong>Responses:</strong> Please use this section to address all current and future clarifications.
                </p>

                <div className="form-input-group">
                    <label className="form-label">Application No.:</label>
                    <input type="text" name="applicationnumber" value={formData.applicationnumber} onChange={handleChange} className="form-input" required />
                </div>

                <div className="form-input-group">
                    <label className="form-label">Application Title:</label>
                    <input type="text" name="applicationtitle" value={formData.applicationtitle} onChange={handleChange} className="form-input" required />
                </div>
            </div>

            {/* Supervisor & Applicant Details Section */}
            <h2 className="section-title">SECTION B</h2>
            <div className="form-input-group">
                <label className="form-label">Supervisor Name:</label>
                <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Supervisor Email:</label>
                <input type="email" name="supervisorEmail" value={formData.supervisorEmail} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Applicant Name:</label>
                <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Applicant Email:</label>
                <input type="email" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Project Title:</label>
                <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Start Date:</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">End Date:</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="form-input" required />
            </div>

            {/* Human Participants Section */}
            <fieldset className="checkbox-fieldset">
                <legend className="fieldset-title">Human Participants</legend>
                {Object.entries(formData.humanParticipants).map(([key, value]) => (
                    <div key={key} className="checkbox-item">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("humanParticipants", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>

            {/* Subject Matter Section */}
            <fieldset className="checkbox-fieldset">
                <legend className="fieldset-title">Study Subject Matter</legend>
                {Object.entries(formData.subjectMatter).map(([key, value]) => (
                    <div key={key} className="checkbox-item">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("subjectMatter", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>

            <div className="file-upload-section">
                <h3 className="section-title">Upload Related Documents</h3>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input"
                />
                <ul className="file-list">
                    {files.length > 0 && files.map((file, index) => (
                        <li key={index} className="file-item">
                            <span>{file.name}</span>
                            <button
                                onClick={() => handleFileRemove(index)}
                                className="remove-file-btn"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <button type="submit" onClick={handleSubmit} className="submit-btn">
                Submit
            </button>
        </div>
    );
};

export default EthicsForm;
