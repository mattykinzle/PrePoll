import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import API from '../../utils/API';
import { Button, Col, Row, Container, Card } from "react-bootstrap"

function Charts(userCounty) {



    const [censusData, setCensusData] = useState([]);
    //insurance state
    const [IchartData, setIChartData] = useState({});
    //Employment state
    const [EchartData, setEchartata] = useState({});
    //median male v female income
    const [MFchartData, setMFchartData] = useState({});
    //Total Population
    const [populationData, setpopulationData] = useState([]);
    //median income
    const [incomeData, setincomeData] = useState([]);
    //poverty line
    const [povertyData, setpovertyData] = useState([]);

    const [theCounty, settheCounty] = useState();


    // const localCounty = JSON.stringify(userCounty) + ' County'
    // console.log(localCounty)
    useEffect(() => {
        API.checkUserInfo().then(response => {

            settheCounty(response.data.county + ' County')
            getCensusData(response.data.county + ' County')
        })

    }, [])


    function getCensusData(c) {
        console.log(c)
        axios.get('/api/census/' + c).then((response) => {
            console.log(response.data)
            setCensusData([...response.data]);
            chartDataSetter(response.data);
        })
    }

    function chartDataSetter(e) {

        setpopulationData(e[0].totalpopulation);
        setincomeData(e[0].medianincome);
        setpovertyData(e[0].belowpovertyline);

        setIChartData({
            labels: ['Insured', 'Uninsured'],
            datasets: [
                {
                    data: [e[0].insured, e[0].uninsured],
                    backgroundColor: [
                        '#021b45',
                        '#d90429'
                    ],
                    borderWidth: 3
                }
            ]
        });
        setEchartata({
            labels: ['Employed', 'Unemployed'],
            datasets: [
                {
                    data: [e[0].employed, e[0].unemployed],
                    backgroundColor: [
                        '#021b45',
                        '#d90429'
                    ],
                    borderWidth: 3
                }
            ]
        });


        setMFchartData({
            labels: ['Median Male Income', 'Median Female Income'],
            datasets: [
                {
                    data: [e[0].medianmaleincome, e[0].medianfemaleincome],
                    backgroundColor: [
                        '#021b45',
                        '#d90429'
                    ],
                    borderWidth: 3
                }
            ]
        });


    }


    return (
        <>
            <div><h1>{theCounty}</h1></div>
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
                        {/* {censusData[0] ? */}
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
                                        fontSize: 15,
                                        fontColor: "#021b45"
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,

                                }}
                            />
                        </Col>
                    </div>
                    <div className="chart">
                        <Col md={6}>
                            <Doughnut
                                // censusData={censusData.data}
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


                        {/* :
                        <Col>
                        <p>Please load a County</p>
                        </Col>
                    } */}
                    </div>
                </Row>
                <Row>
                    <Col md="6">
                        <Doughnut
                            // censusData={censusData.data}
                            data={MFchartData}
                            options={{
                                title: {
                                    display: true,
                                    text: "Median Male Income vs. Median Female Income",
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
                </Row>
            </Container>

        </>

    )


};

export default Charts; 