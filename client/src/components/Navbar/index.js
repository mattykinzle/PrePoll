import React from "react";
import { Link } from "react-router-dom"
import "./style.css";
import profilePic from "../../assets/portfoliopic1.png"

function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg">

                <Link className="navbar-brand" to="/">
                    <span className="red">P</span>
                    <span className="white">r</span>
                    <span className="blue">e</span>
                    <span className="red">P</span>
                    <span className="white">o</span>
                    <span className="blue">l</span>
                    <span className="red">l</span>
                </Link>

                <Link className="nav-link active" to="/news">News  |</Link>
                <Link className="nav-link active" to="/vote">Vote  |</Link>
                <Link className="nav-link active" to="/info">Info</Link>

                <Link className="ml-md-auto" href="#">
                    <img className="userPic" src={profilePic} alt="profilePic" />
                </Link>

            </nav>
        </div>
    )
}

export default Navbar;
