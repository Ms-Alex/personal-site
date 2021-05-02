import React from 'react';

import Intro from './main/Intro'
import About from './main/About'
import Experience from './main/Experience'
import Contact from './main/Contact';

function Main() {
    return (
        <main>
            <div className="middle-container">
                <Intro />

                <hr/>

                <div className="profile">
                    <About />
                    <Experience />
                </div>

                <hr/>
                <Contact />
            </div>
        </main>
    )
}

export default Main;