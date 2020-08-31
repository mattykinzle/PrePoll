import React from 'react';
import "./style.css";
import Countdown from '../../components/Countdown/index.';
import NewsLanding from '../../components/NewsLanding/index';
// import Hero from '../../components/Hero/index';
import HowToPoll from '../../components/HowToPoll';

const Landing = () => {

    return (
        <div className="mainLanding">
            <Countdown />
            {/* <Hero /> */}
            <NewsLanding />
            <HowToPoll />
        </div >

    );
};

export default Landing;