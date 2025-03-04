// // src/components/SupervisorDashboard.tsx
// import React from 'react';
// import Footer from '../components/footer';
// import Header from '../components/header';
// import { Link } from 'react-router-dom';
// import SupervisorEthicsNavBar from '../Components/supervisorethicsnavbar';
// import './supervisor.css';

// const SupervisorEthics: React.FC = () => {
//     return (
//         <div className="app-container">
//             <Header title="University Research Management System" userName="SuperVisor" />
//             <SupervisorEthicsNavBar />
//             <main className="main-content">
//                 <h1>Apply for Ethics Approval</h1>
//                 <h2>Application Forms</h2>
//                 <ul>
//                     <li>
//                         <Link to="/forms/expedited-ethics">Expedited Ethics Form - most studies will use this form</Link>
//                     </li>
//                     <li>
//                         <Link to="/forms/mac-compatible-expedited-ethics">MAC Compatible Expedited Ethics Form</Link>
//                     </li>
//                     <li>
//                         <Link to="/forms/full-ethics">Full Ethics Form - for studies that include under 18s and/or vulnerable participants</Link>
//                     </li>
//                 </ul>
//                 <h2>SE Research Privacy Notice Form</h2>
//                 <ul>
//                     <li>
//                         <Link to="/forms/research-privacy-notice">Guidance on how to fill the Research Privacy Notice Form</Link>
//                     </li>
//                 </ul>
//                 <h2>Other Forms</h2>
//                 <ul>
//                     <li>
//                         <Link to="/forms/ul-child-protection">UL Child Protection Form - to be submitted only if using participants under the age of 18</Link>
//                     </li>
//                     <li>
//                         <Link to="/forms/chairs-decision">Chairs Decision Form - to be submitted if minor changes have been made to a previously approved application</Link>
//                     </li>
//                 </ul>

//                 <div className="video-instructions-container">           <h1>Video Instructions for Ethics Application</h1>
//                     <p>It is advised you view the below videos before proceeding with your Ethics application. The first four videos are no longer than six minutes in length.</p>
//                     <ul>
//                         <li>
//                             <a href="https://www.ul.ie/media/24648" target="_blank" rel="noopener noreferrer">
//                                 Do I need ethical approval?
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://www.ul.ie/media/24648" target="_blank" rel="noopener noreferrer">
//                                 How to fill out an application (Sections 1-4)
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://www.ul.ie/media/24665" target="_blank" rel="noopener noreferrer">
//                                 How to fill out an application (Section 5a - 5c)
//                             </a>
//                         </li>
//                         <li>
//                             <a href="https://www.ul.ie/media/24666" target="_blank" rel="noopener noreferrer">
//                                 How to fill out an application (Section 5d - 5f)
//                             </a>                </li>
//                         <li>
//                             <a href="https://www.ul.ie/media/25771" target="_blank" rel="noopener noreferrer">
//                                 How to fill out an application (Section 6 - 8)
//                             </a>
//                         </li>
//                     </ul>
//                 </div>

//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default SupervisorEthics;

import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import SupervisorEthicsNavBar from '../Components/supervisorethicsnavbar';
import EthicsForm from '../components/ethicsform'; // Import the form
import './supervisor.css';

const SupervisorEthics: React.FC = () => {
    const [selectedForm, setSelectedForm] = useState<string | null>(null);

    return (
        <div className="app-container">
            <Header title="University Research Management System" userName="SuperVisor" />
            <SupervisorEthicsNavBar />
            <main className="main-content">
                <h1>Apply for Ethics Approval</h1>
                {selectedForm ? (
                    <div>
                        <button onClick={() => setSelectedForm(null)} className=" text-white px-4 py-2 rounded mb-4">
                            ⬅ Back to Forms
                        </button>
                        <EthicsForm />
                    </div>
                ) : (
                    <>
                        <h2>Application Forms</h2>
                        <ul>
                            <li>
                                <button onClick={() => setSelectedForm("expedited-ethics")}>
                                    Expedited Ethics Form - most studies will use this form
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSelectedForm("mac-compatible-expedited-ethics")}>
                                    MAC Compatible Expedited Ethics Form
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSelectedForm("full-ethics")}>
                                    Full Ethics Form - for studies that include under 18s and/or vulnerable participants
                                </button>
                            </li>
                        </ul>
                        <h2>SE Research Privacy Notice Form</h2>
                        <ul>
                            <li>
                                <button onClick={() => setSelectedForm("research-privacy-notice")}>
                                    Guidance on how to fill the Research Privacy Notice Form
                                </button>
                            </li>
                        </ul>
                        <h2>Other Forms</h2>
                        <ul>
                            <li>
                                <button onClick={() => setSelectedForm("ul-child-protection")}>
                                    UL Child Protection Form - to be submitted only if using participants under the age of 18
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setSelectedForm("chairs-decision")}>
                                    Chairs Decision Form - to be submitted if minor changes have been made to a previously approved application
                                </button>
                            </li>
                        </ul>
                        <div className="video-instructions-container">           <h1>Video Instructions for Ethics Application</h1>
                            <p>It is advised you view the below videos before proceeding with your Ethics application. The first four videos are no longer than six minutes in length.</p>
                            <ul>
                                <li>
                                    <a href="https://www.ul.ie/media/24648" target="_blank" rel="noopener noreferrer">
                                        Do I need ethical approval?
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.ul.ie/media/24648" target="_blank" rel="noopener noreferrer">
                                        How to fill out an application (Sections 1-4)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.ul.ie/media/24665" target="_blank" rel="noopener noreferrer">
                                        How to fill out an application (Section 5a - 5c)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.ul.ie/media/24666" target="_blank" rel="noopener noreferrer">
                                        How to fill out an application (Section 5d - 5f)
                                    </a>                </li>
                                <li>
                                    <a href="https://www.ul.ie/media/25771" target="_blank" rel="noopener noreferrer">
                                        How to fill out an application (Section 6 - 8)
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SupervisorEthics;
