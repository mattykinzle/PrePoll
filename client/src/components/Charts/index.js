import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut, Bar } from "react-chartjs-2";
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

    const [barChart, setBarChart] = useState({})


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
                        '#1D3557',
                        '#C81927'
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
                        '#1D3557',
                        '#C81927'
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
                        '#1D3557',
                        '#C81927'
                    ],
                    borderWidth: 3
                }
            ]
        });

        setBarChart({
            labels: ["Agriculture, Forestry, Fishing, Hunting, and Mining", "Construction", "Manufacturing", "Wholesale Trade", "Retail Trade", "Transportation , Warehousing, and Utilities", "Information", "Finance, Insurance, Real Estate and Rental/Leasing", "Professional scientific management and Administrative waste management services", "Educational Services, Health Care, and Social assistance", "Arts, Entertainment, Recreation, Accommodation, and Food services", "Other services, except public administration", "Public administration"],
            datasets: [
                {
                    data: [e[0].Agricultureforestryfishingandhuntingandmining, e[0].Construction, e[0].Manufacturing, e[0].Wholesaletrade, e[0].Retailtrade, e[0].Transportationandwarehousingandutilities, e[0].Information, e[0].Financeandinsuranceandrealestateandrentalandleasing, e[0].ScientificManagementAdministrativeWastemanagementservices, e[0].Educationalservicesandhealthcareandsocialassistance, e[0].Artsentertainmentandrecreationandaccommodationandfoodservices, e[0].Otherservicesexceptpublicadministration, e[0].Publicadministration],
                    backgroundColor: [
                        '#1D3557',
                        '#457B9D',
                        '#1D3557',
                        '#457B9D',
                        '#1D3557',
                        '#457B9D',
                        '#1D3557',
                        '#457B9D',
                        '#1D3557',
                        '#457B9D',
                        '#1D3557',
                        '#457B9D',
                        '#1D3557'
                    ],
                    borderWidth: 3
                }
            ]
        });


    }


    return (
        <>
            <div><h1 className="header">{theCounty}</h1></div>
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
                    </div>
                </Row>
                <Row>
                    <div className="chart">
                        <Col md={3}>

                        </Col>
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
                    </div>
                </Row>
                <Row>
                    <div className="Industrybar">
                        <Col className="Industry" md={11}>
                            <Bar
                                data={barChart}
                                options={{
                                    title: {
                                        display: true,
                                        text: "Population by Industry",
                                        fontSize: 25,
                                        fontColor: "#021b45",
                                        textAlign: "center",
                                        marginBottom: "10px"
                                    },
                                    legend: {
                                        display: false,
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,
                                }}
                            />

                        </Col>
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


};

export default Charts; 