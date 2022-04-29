import React from "react";
import Skills from "../Components/skills"

import soft from "./soft.png"
import programming from "./programming.png"
import web from "./web.png"
import tools from "./tools.png"

export default function About(props){
    return(
        <div className="about-content">
            <p className="about-title">About Me</p>
        <div className="skills-container">
            <h2>Skills</h2> 
                <div className="flex-container">
                    <Skills 
                        img={soft}
                        title="Soft Skills"
                        description="Teamwork, Problem-solving, Attention to Details, Analytical Skills"/> 
                    <Skills
                        img={programming} 
                        title="Programming Language"
                        description="C++, Java "
                    />
                    <Skills
                        img={web}
                        title="Web Development"
                        description="HTML, CSS, SQL, PHP, Bootstrap, Javascript"
                    />
                    <Skills 
                        img={tools}
                        title="Tools"
                        description="Waikato Environment for Knowledge Analysis (WEKA), Power BI, IBM SPSS Statistics, Jamovi"
                    /> 
                    </div>
            </div>
            <div className="about-lower">
                <div className="education">
                    <h2>Education</h2>
                    <ul className="about-list">
                    <li>2018 - Present
                        Bachelor of Science in Information Technology
                        Bulacan State University
                    </li>
                    <li>
                    2016 - 2018
                    Senior Highschool -  Science, Technology, Engineering and Mathematics (STEM)
                    Dr. Yanga's Colleges Inc.
                    </li>
                    <li>
                    2012 - 2016
                    Junior Highschool
                    Assemblywoman Felicita G. Memorial Trade School
                    </li>
                </ul>
                </div>
                <div className="extra-curricular">
                    <h2>Extra-Curricular</h2>
                        <ul className="about-list">
                            <li>A.Y. 2021-2022
                                VP for Finance Operation
                                Society for the Welfare of Information Technology Students (College-based)
                            </li>
                            <li>
                                A.Y. 2020-2021
                                3rd Year Representative
                                Society for the Welfare of Information Technology Students
                            </li>
                            <li>
                                A.Y. 2019-2020
                                Layout Artist
                                Society for the Welfare of Information Technology Students
                            </li>
                        </ul>
               </div>         
            </div>
        </div>   
    )
}