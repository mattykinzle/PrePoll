import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import API from '../../utils/API';
import { Button, Col, Row, Container, Card } from "react-bootstrap"

function StateCharts() {

    const [censusData, setCensusData] = useState([]);
    const [financeData, setFinanceData] = useState([]);
    const [populationData, setpopulationData] = useState([]);
    //median income
    const [incomeData, setincomeData] = useState([]);
    //poverty line
    const [povertyData, setpovertyData] = useState([]);
    const [IchartData, setIChartData] = useState({});
    //Employment state
    const [EchartData, setEchartata] = useState({});

    const [education, setEducation] = useState([]);
    const [healthcare, setHealthcare] = useState([]);
    const [police, setPolice] = useState([]);
    const [highways, setHighways] = useState([]);
    const [revenue, setRevenue] = useState([]);

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
        // console.log(d);
        setpopulationData(d[0].totalpopulation);
        setincomeData(d[0].medianincome);
        setpovertyData(d[0].belowpovertyline);
        setIChartData({
            labels: ['Insured', 'Uninsured'],
            datasets: [
                {
                    data: [d[0].insured, d[0].uninsured],
                    backgroundColor: [
                        '#1D3557',
                        '#C81927'
                    ],
                    borderWidth: 2
                }
            ]
        });
        setEchartata({
            labels: ['Employed', 'Unemployed'],
            datasets: [
                {
                    data: [d[0].employed, d[0].unemployed],
                    backgroundColor: [
                        '#1D3557',
                        '#C81927'
                    ],
                    borderWidth: 3
                }
            ]
        });
    };

    function barSetter(b) {
        console.log(b)
        setEducation({
            labels: ['2014', '2015', '2016', '2017', '2018'],
            datasets: [{
                label: 'Education Funding',
                data: [b[4].education, b[3].education, b[2].education, b[1].education, b[0].education],
                backgroundColor: ['#1D3557', '#1D3557', '#1D3557', '#1D3557', '#1D3557'],
                borderWidth: 3
            }],
        });


        setHealthcare({
            labels: ['2014', '2015', '2016', '2017', '2018'],
            datasets: [{
                label: 'Healthcare Funding',
                data: [b[4].hospitalsHealth, b[3].hospitalsHealth, b[2].hospitalsHealth, b[1].hospitalsHealth, b[0].hospitalsHealth],

                backgroundColor: ['#457B9D', '#457B9D', '#457B9D', '#457B9D', '#457B9D'],
                borderWidth: 3
            }],
        })

        setPolice({
            labels: ['2014', '2015', '2016', '2017', '2018'],
            datasets: [{
                label: 'Police and Corrections Funding',
                data: [b[4].policeCorrections, b[3].policeCorrections, b[2].policeCorrections, b[1].policeCorrections, b[0].policeCorrections],
                backgroundColor: ['#457B9D', '#457B9D', '#457B9D', '#457B9D', '#457B9D'],
                borderWidth: 3
            }],
        })

        setHighways({
            labels: ['2014', '2015', '2016', '2017', '2018'],
            datasets: [{
                label: 'Highway and Infrastructure Funding',
                data: [b[4].highways, b[3].highways, b[2].highways, b[1].highways, b[0].highways],
                backgroundColor: ['#1D3557', '#1D3557', '#1D3557', '#1D3557', '#1D3557'],
                borderWidth: 3
            }],

        })

        setRevenue({
            labels: ['2014', '2015', '2016', '2017', '2018'],
            datasets: [{
                label: 'Total funding over 5 years',
                data: [b[4].totalRevenue, b[3].totalRevenue, b[2].totalRevenue, b[1].totalRevenue, b[0].totalRevenue],
                backgroundColor: ['#C81927', '#C81927', '#C81927', '#C81927', '#C81927'],
                borderWidth: 3
            }],
        })
    };

    return (
        <>
            <div><h1 className="header">Texas</h1></div>
            <hr />
            <Container className="numbersContainer">
                <div className="rawNumbers">
                    <div> <h2 className="population">Population: {populationData}</h2> </div>
                    <div> <h2 className="householdimcone">Median Income: ${incomeData}</h2></div>
                    <div> <h2 className="povertyLine">Families Below the Poverty Line: {povertyData}%</h2></div>
                </div>
            </Container>
            <Container>
                <Row>
                    <div className="chart">
                        <Col md={6}>
                            <Doughnut
                                data={EchartData}
                                options={{
                                    title: {
                                        display: true,
                                        text: "Employed vs. Unemployed",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}
                            />
                        </Col>
                    </div>
                    <div className="dchart">
                        <Col md={6}>
                            <Doughnut
                                data={IchartData}
                                options={{
                                    title: {
                                        display: true,
                                        text: "Insured vs. Uninsured",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}
                            />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className='bchart'>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Bar
                                data={revenue}
                                options={{
                                    title: {
                                        display: true,
                                        text: "State of Texas Total Funds 2014-2018",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}

                            />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className='bchart'>
                        <Col md="6" >
                            <Bar
                                data={education}
                                options={{
                                    title: {
                                        display: true,
                                        text: "State of Texas Education Funding 2014-2018",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}

                            />
                        </Col>
                    </div>
                    <div className='bchart'>
                        <Col md="6">
                            <Bar
                                data={healthcare}
                                options={{
                                    title: {
                                        display: true,
                                        text: "State of Texas Healthcare Funding 2014-2018",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}

                            />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className='bchart'>
                        <Col md="6">
                            <Bar
                                data={police}
                                options={{
                                    title: {
                                        display: true,
                                        text: "State of Texas Police and Corrections Funding 2014-2018",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}

                            />

                        </Col >
                    </div>
                    <div className='bchart'>
                        <Col md="6">
                            <Bar
                                data={highways}
                                options={{
                                    title: {
                                        display: true,
                                        text: "State of Texas Highway and Infrastructure Funding 2014-2018",
                                        fontSize: 25,
                                        fontColor: "#021b45"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}

                            />

                        </Col >
                    </div>
                </Row>
            </Container>
            <Row>
                <Col md={12}>
                    <Container className="disclaimerContainer">
                        <div><p className="disclaimer"> *All the data presented here is sourced from the acs census data collected in 2018</p></div>
                    </Container>
                </Col>
            </Row>

        </>
    )

}

export default StateCharts; 