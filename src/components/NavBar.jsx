import React from 'react'
import { Link } from "react-scroll";

const RESUME_PDF = "https://drive.google.com/file/d/13We0R8Ovlo1xJRTwPonSjLeBQJYDY7H1/view"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="home" smooth={true} activeClass="active"
                      offset={-30}
                      duration={500}
                >
                    <a className="navbar-brand">AH</a>
                </Link>

                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="intro" smooth={true} activeClass="active"
                                  offset={-30}
                                  duration={500}
                            >
                                <a className="nav-link">Intro</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" smooth={true} activeClass="active"
                                  offset={-30}
                                  duration={500}
                            >
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="experience" smooth={true} activeClass="active"
                                  offset={-30}
                                  duration={500}
                            >
                                <a className="nav-link">Experience</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" smooth={true} activeClass="active"
                                  offset={-30}
                                  duration={500}
                            >
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-dark" role="button" href={RESUME_PDF}
                               target="_blank" rel="noreferrer">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;