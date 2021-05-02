import React from 'react';

import Petals from '../assets/petals.png'
import FemEng from '../assets/female-eng.png'

function Header() {
    return <header>
        <div className="container-fluid top-container">
            <h1>Alexandra Hernandez</h1>
            <hr />
            <p>software engineer</p>

            <div className="container header-imgs">
                <img className="petals" src={Petals} alt="Pink Flower Rose Petals Petal Beach - www.freepngimg.com" />
                <img className="female" src={FemEng} alt="Abstract vector created by vectorjuice - www.freepik.com" />
            </div>

        </div>
    </header>
}

export default Header;