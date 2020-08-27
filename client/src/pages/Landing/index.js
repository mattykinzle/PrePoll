import React from 'react';
import "./style.css";
import Countdown from '../../components/Countdown/index.';
import NewsLanding from '../../components/NewsLanding/index';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HowToPoll from '../../components/HowToPoll';

const Landing = () => {

    return (
        <div className="mainLanding">
            <Countdown />
            <NewsLanding />
            <HowToPoll />
        </div >

    );
};

export default Landing;