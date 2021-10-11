import React from 'react';
import resumeimage from '../assets/images/resume.jpg'
import resume from '../assets/pdf/Logan_Alexander_Dufek_Resume_(2021).pdf'

function Resume() {

    return (
        <div className="resume-page">

            <div className="resume-container">

                <div className="proficiencies">
                    <h4>
                        Proficiencies
                    </h4>


                </div>
                <li>
                    HTML,
                </li>
                <li>
                    CSS,
                </li>
                <li>
                    Javascript,
                </li>
                <li>
                    React,
                </li>
                <li>
                    Node.Js,
                </li>
                 <li>
                     Express.Js,
                </li>
                <li>
                     SQL,
                </li>
                <li>
                     Sequalize,
                </li>
                 <li>
                     MongoDB/Mongoose,
                </li>
                 <li>
                     GraphQL,
                </li>
                 <li>
                     MVC Structure
                </li>


                <img src={resumeimage}

                    className="resume"></img>


                <a href={resume} className="download-button" download>
                    <h3> Download Resume </h3>
                </a>


            </div>
        </div>
    )
}

export default Resume;