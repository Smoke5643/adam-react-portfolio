import React from "react";
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <footer className="fixed-bottom text-center bg-dark">
            <div className="mb-2 bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <a href="https://github.com/Smoke5643" className="me-3" target='_blank' rel="noreferrer"><img src={github} alt="Github Logo" height={50} /></a>
                <a href="https://www.linkedin.com/in/adam-queen-7a17a724a/" className="me-3" target='_blank' rel="noreferrer"><img src={linkedin} alt="LinkdedIn Logo" height={50} /></a>
                <a href="https://twitter.com/Smoke5643" className="me-3" target='_blank' rel="noreferrer"><img src={twitter} alt="Twitter Logo" height={50} /></a>
            </div>
        </footer>
    );
}

export default Footer;