import React, { useState } from "react";
import './form.css';

const EthicsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        clarifications: "",
        application_title: "",
        application_number: "",
        supervisor_name: "",
        supervisor_email: "",
        applicant_name: "",
        applicant_email: "",
        project_title: "",
        start_date: "",
        end_date: "",
        declarationDate: "",
        human_participants: {
            vulnerable_persons: false,
            under_18: false,
            patients: false,
            staff: false,
        },
        subject_matter: {
            sensitive_issues: false,
            illegal_activities: false,
            self_respect_risk: false,
        },
    });
    const [files, setFiles] = useState<File[]>([]);

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setFiles([...files, ...Array.from(e.target.files)]);
    //     }
    // };

    // const handleFileRemove = (index: number) => {
    //     setFiles(files.filter((_, i) => i !== index));
    // };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;

        // Check if the name refers to a nested field
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === 'checkbox' ? checked : value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleCheckboxChange = (category: "human_participants" | "subject_matter", field: string) => {
        setFormData((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [field]: !prev[category][field],
            },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare form data for submission
        const data = new FormData();
        data.append("clarifications", formData.clarifications);
        data.append("application_title", formData.application_title);
        data.append("application_number", formData.application_number);
        data.append("supervisor_name", formData.supervisor_name);
        data.append("supervisor_email", formData.supervisor_email);
        data.append("applicant_name", formData.applicant_name);
        data.append("applicant_email", formData.applicant_email);
        data.append("project_title", formData.project_title);
        data.append("start_date", formData.start_date);
        data.append("end_date", formData.end_date);
        data.append("declaration_date", formData.declarationDate);

        // Add human participants & subject matter data
        Object.entries(formData.human_participants).forEach(([key, value]) => {
            data.append(`human_participants[${key}]`, String(value));
        });
        Object.entries(formData.subject_matter).forEach(([key, value]) => {
            data.append(`subject_matter[${key}]`, String(value));
        });

        // // Append files to FormData
        // files.forEach((file) => {
        //     data.append("files", file);
        // });

        // Make the API request
        try {
            const response = await fetch('http://127.0.0.1:8000/ethics/form', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("auth_token")}` // Include the authentication token if needed
                },
                body: data,
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const responseData = await response.json();
            console.log('Form submitted successfully:', responseData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form.');
        }
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
                    <input type="text" name="application_number" value={formData.application_number} onChange={handleChange} className="form-input" required />
                </div>

                <div className="form-input-group">
                    <label className="form-label">Application Title:</label>
                    <input type="text" name="application_title" value={formData.application_title} onChange={handleChange} className="form-input" required />
                </div>
            </div>

            {/* Supervisor & Applicant Details Section */}
            <h2 className="section-title">SECTION B</h2>
            <div className="form-input-group">
                <label className="form-label">Supervisor Name:</label>
                <input type="text" name="supervisor_name" value={formData.supervisor_name} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Supervisor Email:</label>
                <input type="email" name="supervisor_email" value={formData.supervisor_email} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Applicant Name:</label>
                <input type="text" name="applicant_name" value={formData.applicant_name} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Applicant Email:</label>
                <input type="email" name="applicant_email" value={formData.applicant_email} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Project Title:</label>
                <input type="text" name="project_title" value={formData.project_title} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">Start Date:</label>
                <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} className="form-input" required />
            </div>

            <div className="form-input-group">
                <label className="form-label">End Date:</label>
                <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} className="form-input" required />
            </div>

            {/* Human Participants Section */}
            <fieldset className="checkbox-fieldset">
                <legend className="fieldset-title">Human Participants</legend>
                {Object.entries(formData.human_participants).map(([key, value]) => (
                    <div key={key} className="checkbox-item">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("human_participants", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>

            {/* Subject Matter Section */}
            <fieldset className="checkbox-fieldset">
                <legend className="fieldset-title">Study Subject Matter</legend>
                {Object.entries(formData.subject_matter).map(([key, value]) => (
                    <div key={key} className="checkbox-item">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("subject_matter", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>

            {/* <div className="file-upload-section">
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
            </div> */}

            <button type="submit" onClick={handleSubmit} className="submit-btn">
                Submit
            </button>
        </div>
    );
};

export default EthicsForm;
