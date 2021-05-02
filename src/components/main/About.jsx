import React from 'react';

import Gopher from "../../assets/gopher-unicorn.jpeg";

function About() {
    return (
        <div className="skills">
            <h2>My Skills</h2>

            <div className="skills-tech">
                <div className="skills-img-div">
                    <img className="skills-img"
                         src={Gopher}
                         alt="Unicorn Gopher - https://womenwhogo.threadless.com/"/>
                </div>

                <div className="skills-tech-desc">
                    <h3>Software Development</h3>
                    <p>My interest in software and web development started in 2010, when I found out the powers
                        of HTML and CSS through MySpace (how time has passed!). Fast forward to 2018, I attended
                        Flatiron School where I learned the different technical skills needed to be successful
                        as a web developer. </p>
                    <p>Right after graduating from the technical school, I received an offer to work at an
                        application security company. As of today I've been exposed to and have hands-on
                        experience using different technologies. </p>

                    <p>A few technologies I've recently worked with include:</p>

                    <table className="techs">
                        <tbody>
                        <tr>
                            <td>➤ Go</td>
                            <td>➤ Javascript</td>
                        </tr>
                        <tr>
                            <td>➤ Ruby</td>
                            <td>➤ Python</td>
                        </tr>
                        <tr>
                            <td>➤ React.js</td>
                            <td>➤ Docker</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default About;