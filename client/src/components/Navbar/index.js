import React from "react";
import "./style.css";
import profilePic from "../../assets/portfoliopic1.png"

function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg">

                <a className="navbar-brand" href="/">
                    <span className="red">P</span>
                    <span className="white">r</span>
                    <span className="blue">e</span>
                    <span className="red">P</span>
                    <span className="white">o</span>
                    <span className="blue">l</span>
                    <span className="red">l</span>
                </a>

                <a className="nav-link active" href="/news">News  |</a>
                <a className="nav-link active" href="/vote">Vote  |</a>
                <a className="nav-link active" href="/info">Info</a>

                <a className="ml-md-auto" href="#">
                    <img className="userPic" src={profilePic} alt="profilePic" />
                </a>

            </nav>
        </div>
    )
}

export default Navbar;
