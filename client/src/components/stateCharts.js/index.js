import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import API from '../../utils/API';
import { Button, Col, Row, Container, Card } from "react-bootstrap"

function StateCharts() {

    const [censusData, setCensusData] = useState([]);
    const [financeData, setFinanceData] = useState([]);

    useEffect(() => {

        axios.get('/api/census/' + 'Texas').then((response) => {
            console.log(response.data)
            setCensusData([...response.data]);
            dougnutSetter(response.data);
        })

        axios.get('/api/finances/').then((response) => {
            console.log(response.data)
            setFinanceData([...response.data])
            barSetter(response.data)
        })


    }, [])

    function dougnutSetter(d) {
        console.log(d)
    };

    function barSetter(b) {
        console.log(b)
    };

    return (
        <>
            <p>State Charts will go here</p>
        </>
    )

}

export default StateCharts; 