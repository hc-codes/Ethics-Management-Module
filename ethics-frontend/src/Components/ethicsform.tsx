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
    const [rows, setRows] = useState([
        { supervisorResponse: "", reviewer1Comments: "", reviewer2Comments: "" },
    ]);
    const [files, setFiles] = useState<File[]>([]);

    const handleInputChange = (index: number, field: string, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [field]: value };
        setRows(updatedRows);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    const handleFileRemove = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };
    const addRow = () => {
        setRows([...rows, { supervisorResponse: "", reviewer1Comments: "", reviewer2Comments: "" }]);
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
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Disclaimer Section */}
            <div className="bg-gray-100 p-4 border-l-4 border-blue-500 rounded-md mb-6">
                <hr className="my-6 border-t border-gray-300" />
                <p className="text-gray-700">
                    <strong>Thank you for engaging with the Faculty of Science & Engineering Research Ethics application process.</strong> Please read the following in full before proceeding with your application:
                </p>
                <p className="text-gray-700 mt-2">
                    Please note that all Health Research oversight on behalf of the University of Limerick is undertaken by the Health Research Oversight Committee (HROC). The HROC First Contact Questionnaire can be found <a href="#" className="text-blue-600 underline">here</a>. The HROC reports to the University Research Committee (URC), chaired by the VPR. If you are conducting health research, you must engage with the HROC prior to or in parallel with submitting this application. For more information, please see the <a href="#" className="text-blue-600 underline">UL Health Research Policy</a>.
                </p>
                <p className="text-gray-700 mt-2">
                    If this study involves patients or staff from a clinical, hospital, or GP setting then you <strong>MUST</strong> apply to the relevant Ethics Committee where the patients or staff are based (for example, if you are working with patients in UHL, you will need HSE ethics approval).
                </p>
                <p className="text-gray-700 mt-2">
                    If this is a new application, please proceed to <strong>Section B</strong>.
                    If this is an existing application which requires clarification, please proceed to <strong>Section A</strong>.
                </p>
            </div>
            {/* Divider */}
            <hr className="my-6 border-t border-gray-300" />

            {/* Supervisor Declaration */}
            <div>
                <h3 className="text-xl font-bold mb-2">Supervisor/Principal Investigator Declaration</h3>
                <p className="text-gray-700">
                    I, the undersigned, hereby declare that this submission is entirely the work of my own and my research team (i.e., students, collaborating staff, etc.). I understand the ethical implications of my research and this work meets, to the best of my knowledge, the requirements of the Faculty of Science & Engineering Research Ethics Committee. I confirm that I have reviewed this application and agree to its submission for review.
                </p>

                <div className="grid grid-cols-2 items-center gap-4 mt-4">
                    <label className="font-semibold">Supervisor/Principal Investigator*:</label>
                    <input type="text" name="supervisorDeclaration" value={formData.supervisorDeclaration} onChange={handleChange} className="border p-2 rounded w-full" required placeholder="Type your name " />

                    <label className="font-semibold">Date:</label>
                    <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h2 className="text-2xl font-bold mb-4">SECTION A</h2>
                <p className="text-gray-700 font-semibold">
                    Please ensure <strong>Track Changes</strong> is enabled (in the Review tab above) before addressing the below clarifications.
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Clarifications:</strong>
                </p>
                <textarea
                    name="clarifications"
                    value={formData.clarifications}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-2 h-40 min-w-[800px]"
                    rows={10}
                    placeholder="Enter clarifications here..."
                />



                <p className="text-gray-700 mt-2">
                    <strong>Responses:</strong> Please use this section to address all current and future clarifications.
                </p>

                <div className="border p-4 mt-4 rounded bg-gray-50">
                    <div className="mb-4">
                        <label className="font-semibold block">Application No.:</label>
                        <input type="text" name="applicationnumber" value={formData.applicationnumber} onChange={handleChange} className="border p-2 rounded w-full" required />
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold block">Application Title:</label>
                        <input type="text" name="applicationtitle" value={formData.applicationtitle} onChange={handleChange} className="border p-2 rounded w-full" required />
                    </div>
                </div>


                {/* Table for Clarifications */}
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 w-1/12">No.</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/3">Supervisor Response</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/3">Reviewer 1 Comments</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/3">Reviewer 2 Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="text"
                                        value={row.supervisorResponse}
                                        onChange={(e) => handleInputChange(index, "supervisorResponse", e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="text"
                                        value={row.reviewer1Comments}
                                        onChange={(e) => handleInputChange(index, "reviewer1Comments", e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="text"
                                        value={row.reviewer2Comments}
                                        onChange={(e) => handleInputChange(index, "reviewer2Comments", e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add Row Button */}
                <button
                    onClick={addRow}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Row
                </button>
            </div>
            <hr className="my-6 border-t border-gray-300" />

            {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
            {/* Supervisor & Applicant Details */}
            <h2 className="text-2xl font-bold mb-4">SECTION B</h2>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="font-semibold">Supervisor Name:</label>
                    <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Supervisor Email:</label>
                    <input type="email" name="supervisorEmail" value={formData.supervisorEmail} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Applicant Name:</label>
                    <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Applicant Email:</label>
                    <input type="email" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Project Title:</label>
                    <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Start Date:</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">End Date:</label>
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>
            </div>

            {/* Human Participants */}
            <fieldset className="border p-4 rounded">
                <legend className="font-semibold">Human Participants</legend>
                {Object.entries(formData.humanParticipants).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("humanParticipants", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>

            {/* Subject Matter */}
            <fieldset className="border p-4 rounded">
                <legend className="font-semibold">Study Subject Matter</legend>
                {Object.entries(formData.subjectMatter).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                        <input type="checkbox" checked={value} onChange={() => handleCheckboxChange("subjectMatter", key)} />
                        <label>{key.replace(/([A-Z])/g, " $1")}</label>
                    </div>
                ))}
            </fieldset>
            <div>
                <h3 className="text-xl font-bold mb-2">Upload Related Documents</h3>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="border p-2 rounded w-full"
                />
                <ul className="mt-2">
                    {files.length > 0 && files.map((file, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded mt-1">
                            <span>{file.name}</span>
                            <button
                                onClick={() => handleFileRemove(index)}
                                className="text-red-600 hover:text-red-800"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Submit
            </button>
            {/* </form> */}
        </div>
    );
};

export default EthicsForm;
