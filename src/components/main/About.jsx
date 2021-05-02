import React from 'react';

import Gopher from "../../assets/gopher-unicorn.jpeg";

function About() {
    return (
        <div className="container about">
            <h2>About Me</h2>

            {/*<div className="container skills-tech">*/}

                <div className="row about-content">
                    {/*GOPHER IMG*/}
                    <div className="col-lg-4 about-img-div">
                        <img className="about-img"
                             src={Gopher}
                             alt="Unicorn Gopher - https://womenwhogo.threadless.com/"/>
                    </div>

                    {/*ABOUT ME DETAILS*/}
                    <div className="col-lg-8 about-desc">
                        <p>My interest in software and web development started in 2010, when I found out the powers
                            of HTML and CSS through MySpace (how time has passed!). Fast forward to 2018, I attended
                            Flatiron School where I learned the different technical skills needed to be successful
                            as a web developer. </p>
                        <p>Right after graduating from the technical school, I received an offer to work at an
                            application security company. As of today I've been exposed to and have hands-on
                            experience using different technologies. </p>

                        <p>A few technologies I've recently worked with include:</p>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    ➤ Go              <br/>
                                    ➤ JavaScript      <br/>
                                    ➤ React.js        <br/>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    ➤ Bootstrap       <br />
                                    ➤ Ruby            <br />
                                    ➤ Docker          <br />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            {/*</div>*/}
        </div>
    )
}

export default About;