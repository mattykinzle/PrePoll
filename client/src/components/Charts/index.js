// import React, { useEffect, useState } from "react";
// import "./style.css";
// import axios from "axios";
// import { Pie } from "react-chartjs-2";
// // import Chart from 'chart.js';
// import Dropdown from "../Dropdown.js";
// import { Button, Col, Row, Container } from "react-bootstrap"
// function Census() {
//     const [censusData, setcensusData] = useState([]);
//     const [county, setCounty] = useState("Williamson County");
//     const [countyList, setCountyList] = useState([]);
//     const [chartData, setChartData] = useState({});


//     useEffect(() => {
//         getCensus();
//         getCounties();
//     }, []);

//     //to get data based on users county selection
//     function getCensus(e) {
//         let countyLocal = e;
//         if (!countyLocal) { countyLocal = "Williamson County" }
//         axios.get('/api/census/' + countyLocal).then((response) => {
//             setcensusData(response.data);
//             censusDataSetter(response.data);
//         }).catch(err => {
//             console.log(err);
//         });
//     };
//     //get all counties from db
//     function getCounties() {
//         if (countyList.length) { return }
//         axios.get("/api/census/").then(res => res.data)
//             .then(response => {
//                 setCountyList(response);
//             }).catch(err => {
//                 console.log(err)
//             })
//     };
//     function handleFormSubmit(e) {
//         e.preventDefault();
//         getCensus(county)
//     }
//     function censusDataSetter(e) {
//         console.log("setting data")
//         console.log(e);
// ​
//         setChartData({
//             labels: ['Insured', 'Uninsured'],
//             datasets: [
//                 {
//                     data: [e[0].insured, e[0].uninsured],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.6)',
//                         'rgba(54, 162, 235, 0.6)'
//                     ],
//                     borderWidth: 3
//                 }
//             ]
//         })
//     }
//     return (
//         <>
//             {console.log('censusData'),
//                 console.log(chartData.data)}
//             <Container className="container">
//                 <Row>
//                     <h1 className="header">Select a County</h1>
//                     <Col className="countySelector">
//                         <br></br>
//                         <form onSubmit={e => handleFormSubmit(e)}>
//                             <Dropdown countyList={countyList} county={county} setCounty={setCounty} />
//                             <Button className="searchCounty" type="submit" value="Submit">Search</Button>
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//             <div className="chart">
//                 {true ?
//                     <Pie
//                         censusData={censusData.data}
//                         data={chartData}
//                         options={{
//                             responsive: true,
//                             maintainAspectRatio: false,
//                             display: true
//                         }}
//                         height={500}
//                         width={700}
//                     />
//                     :
//                     <p>Please load a County</p>
//                 }
//             </div>
//         </>
//     )
// }
// export default Census;
