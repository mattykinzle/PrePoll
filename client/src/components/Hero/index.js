import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import Logo from "../../assets/prepoll-logo-1250x832.png"

function Hero() {
    return (
        <Container fluid>
            <Container>
                <img src={Logo} />
            </Container>
        </Container>
    );
}

export default Hero;
