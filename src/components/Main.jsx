import React from 'react';

import Intro from './main/Intro'
import About from './main/About'
import Experience from './main/Experience'
import Contact from './main/Contact';
import HR from "./HR";

function Main() {
    return (
        <main>
            <div className="container middle-container">
                <Intro />

                <HR />

                <div className="profile">
                    <About />
                    <Experience />
                </div>

                <HR />

                <Contact />
            </div>
        </main>
    )
}

export default Main;