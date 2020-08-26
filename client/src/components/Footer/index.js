import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./style.css";
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'



function Footer() {

    return (
        <div>
            <Router>
                <Nav className="footer" defaultActiveKey="/home" as="ul">
                    <Link className="foot-link active" to="/">PrePoll  |</Link>
                    <Link className="foot-link active" to="/about">About  |</Link>
                    <Link className="foot-link active" to="/about"><FontAwesomeIcon icon={faCopyright} /> 2020</Link>
                </Nav>
            </Router>
        </div>
    )
}

export default Footer;