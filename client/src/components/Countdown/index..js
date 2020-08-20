import React, { useEffect, useState } from "react";
import "./style.css";

function Countdown() {

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(findTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const findTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`11/03/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(findTimeLeft());

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="container-fluid countdown">
            <div className="row">
                <h1 className="countHeader">2020 US Presidential Election Countdown</h1>
                <strong>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</strong>
            </div>
        </div>
    )

}

export default Countdown;

