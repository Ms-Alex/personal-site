import React from 'react'

function Experience() {
    return (
        <div className="exp-history">
            <h3>Work Experience</h3>

            <div className="exp-history-desc">
                <div className="role">
                    <p>
                        <strong>Software Engineer II</strong> @ <span className="career-company">Contrast Security</span>
                    </p>
                    <p>
                        <em>November 2020 - Present</em>
                    </p>

                    <ul>
                        <li>
                            <p>
                                Develop and maintain a Go service that other development teams use in
                                order to communicate with the client facing service.
                            </p>
                        </li>
                        <li>
                            <p>Work with teams dependent on our service to enhance the api, expand
                                existing messages and build deprecation paths for certain features.</p>
                        </li>
                        <li>
                            <p>
                                Collaborate with a security research team in order to improve how our
                                service analyzes potential threats.
                            </p>
                        </li>
                        <li>
                            <p>
                                Help advance the new Go product by implementing minimum GA requirements
                                for official public release.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="role">
                    <p>
                        <strong>Software Engineer</strong> @ <span
                        className="career-company">Contrast Security</span>
                    </p>
                    <p>
                        <em>January 2019 - November 2020</em>
                    </p>

                    <ul>
                        <li>
                            <p>Collaborated in a small team to maintain and improve the testing tooling
                                used by other teams to test their software.
                            </p>
                        </li>
                        <li>
                            <p>
                                Assisted in developing an internal command line tool that will run
                                containerized applications with the company’s product in various
                                environments using Docker.
                            </p>
                        </li>
                        <li>
                            <p>
                                Implement cloud provider’s (Azure) microservices in our testing tooling
                                to assist us in providing enhanced features for the different
                                engineering teams.
                            </p>
                        </li>
                        <li>
                            <p>
                                Integrate different libraries into web applications to assure that the
                                behavior of the engineering product is consistent/as expected.
                            </p>
                        </li>
                        <li>
                            <p>
                                Reviewed team members’ code and assessed the impact their changes made
                                before being merged.
                            </p>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Experience;