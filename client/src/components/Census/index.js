import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
// import Chart from 'chart.js';
import Dropdown from "../Dropdown.js";
import { Button, Col, Row, Container } from "react-bootstrap"
function Census() {
    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState("Williamson County");
    const [countyList, setCountyList] = useState([]);
    //insurance state
    const [IchartData, setIChartData] = useState({});
    //Employment state
    const [EchartData, setEchartata] = useState({});


    useEffect(() => {
        getCensus();
        getCounties();
    }, []);

    //to get data based on users county selection
    function getCensus(e) {
        let countyLocal = e;
        if (!countyLocal) { countyLocal = "Williamson County" }
        axios.get('/api/census/' + countyLocal).then((response) => {
            setcensusData(response.data);
            chartDataSetter(response.data);
        }).catch(err => {
            console.log(err);
        });
    };

    //get all counties from db
    function getCounties() {
        if (countyList.length) { return }
        axios.get("/api/census/").then(res => res.data)
            .then(response => {
                setCountyList(response);
            }).catch(err => {
                console.log(err)
            })
    };


    function handleFormSubmit(e) {
        e.preventDefault();
        getCensus(county)
    }

    function chartDataSetter(e) {

        setIChartData({
            labels: ['Insured', 'Uninsured'],
            datasets: [
                {
                    data: [e[0].insured, e[0].uninsured],
                    backgroundColor: [
                        '#c0c0c',
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
                        '#c0c0c',
                        '#d90429'
                    ],
                    borderWidth: 3
                }
            ]
        })
    }


    return (
        <>
            {/* {console.log('censusData'),
                console.log(chartData)} */}
            <Container className="container">
                <Row>
                    <h1 className="header">Select a County</h1>
                    <Col className="countySelector">
                        <br></br>
                        <form onSubmit={e => handleFormSubmit(e)}>
                            <Dropdown countyList={countyList} county={county} setCounty={setCounty} />
                            <Button className="searchCounty" type="submit" value="Submit">Search</Button>
                        </form>
                    </Col>
                </Row>
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
            </Container>
        </>
    )
}
export default Census;