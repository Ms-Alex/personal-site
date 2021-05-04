import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="container bottom-container">
                <a className="footer-link" href="https://www.linkedin.com/in/alexandra-hernandez-232976123/"
                   target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin fa-2x" />
                </a>
                <a className="footer-link" href="https://github.com/Ms-Alex"
                   target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-2x" />
                </a>
                <a className="footer-link" href="https://medium.com/@ms.hernandeza1"
                   target="_blank" rel="noreferrer">
                    <i className="fab fa-medium fa-2x" />
                </a>

                <p className="dedication">Designed and Built by Alexandra Hernandez</p>
            </div>
        </footer>
    )
}

export default Footer;