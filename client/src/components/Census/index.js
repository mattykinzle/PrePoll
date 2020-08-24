import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Pie } from "react-chartjs-2";
// import Chart from 'chart.js';
import Dropdown from "../Dropdown.js";
import { Button, Col, Row, Container } from "react-bootstrap"
function Census() {
    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState("Williamson County");
    const [countyList, setCountyList] = useState([]);
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: 'test label',
                data: [
                    48,
                    35,
                    73,
                    82
                ],
                labels: ['label 1', 'label 2', 'label 3', 'label 4'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    });
    useEffect(() => {
        getCensus();
        getCounties();
    }, []);
    //to get data based on users county selection
    function getCensus(e) {
        axios.get('/api/census/' + e).then((response) => {
            setcensusData(response.data);
            censusDataSetter(response.data)
        }).catch(err => {
            console.log(err);
        });
    };
    //get all counties from db
    function getCounties() {
        if (countyList.length) { return }
        axios.get("/api/census/").then(res => res.data)
            .then(response => {
                // console.log(response);
                setCountyList(response);
            })
    };
    function handleFormSubmit(e) {
        e.preventDefault();
        getCensus(county)
    }
    function censusDataSetter(e) {
        // console.log(e);
        console.log(e[0].insured)
        console.log(censusData)
        setChartData(
            {
                // name: 'Individuals With Health Insurance',
                data: {
                    datasets: [{
                        data: [e[0].insured, e[0].uninsured],
                        backgroundColor: ['#a3a4a5', '#d90429']
                    }],
                    labels: [
                        "Insured",
                        "Uninsured"
                    ]
                }
            }
        )
    }
    return (
        <>
            {console.log('censusData'),
                console.log(chartData)}
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
            <div className="chart">
                {censusData[0] ?
                    <Pie
                        censusData={censusData}
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            display: true
                        }}
                        height={500}
                        width={700}
                    />
                    :
                    <p>Please load a County</p>
                }
            </div>
        </>
    )
}
export default Census;