import React from 'react';


import Intro from './main/Intro'
import About from './main/About'
import Experience from './main/Experience'
import Contact from './main/Contact';
import HR from "./HR";

import experience from "../data/experience";

function Main() {

    return (
        <main>
            <div className="container middle-container">
                <section id="intro">
                    <Intro />
                </section>

                <HR />
                <div className="profile">
                    <section id="about">
                        <About />
                    </section>

                    <section id="experience">
                        <Experience exp={experience} />
                    </section>
                </div>

                <HR />
                <section id="contact">
                    <Contact />
                </section>

                {/*ALEX TODO: BACK TO TOP BUTTON*/}
                {/*<button className="btn btn-light scroll-top-btn">*/}
                {/*    TOP*/}
                {/*</button>*/}
            </div>
        </main>
    )
}

export default Main;