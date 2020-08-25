import React from 'react';
import "./style.css";
import Countdown from '../../components/Countdown/index.';
import NewsLanding from '../../components/NewsLanding/index';
import Wrapper from '../../components/Wrapper/index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HowToPoll from '../../components/HowToPoll';

const Landing = () => {

    return (
        <div>
            <Countdown />
            <NewsLanding />
            <HowToPoll />
        </div >

    );
};

export default Landing;