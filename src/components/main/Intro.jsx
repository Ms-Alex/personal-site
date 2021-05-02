import React from 'react';
import ProfileImg from "../../assets/me.png";

function Intro() {
    return (
        <div className="container-fluid intro">
            <img className="self" src={ProfileImg} alt="Me"/>
            <h2>Hello.</h2>
            <p>I live in Florida - cannot get enough of the weather here. Things I ❤ are️ coffee, my nintendo
                switch,
                and my too
                cute 12 year old dog baby! I currently work for an application security company, and love
                solving
                challenging
                problems.</p>
        </div>
    )
}

export default Intro;