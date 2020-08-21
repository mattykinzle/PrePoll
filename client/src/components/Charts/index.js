// import React, { useEffect, useState } from "react";
// import "./style.css";
// import axios from 'axios';
// import { Doughnut } from 'react-chartjs-2';

// function Charts() {
//     const [censusData, setcensusData] = useState([]);
//     const [county, setCounty] = useState('Brazoria County');


//     useEffect(() => {

//         getCensus();

//     }, []);


//     function getCensus() {

//         axios.get('/api/census/' + county).then((response) => {
//             setcensusData(response.body);
//             console.log(response);
//         }).catch(err => {
//             console.log(err);
//         });
//     };

//     return (
//         


//     );




// }
// export default Charts;