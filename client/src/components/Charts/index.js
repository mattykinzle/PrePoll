// import React, { useEffect, useState } from "react";
// import "./style.css";
// import axios from 'axios';
// import { Doughnut } from 'react-chartjs-2';

// function Charts({ setChartData, chartData }) {

//     console.log('chartData');
//     console.log(chartData);



//     setChartData(
//         {
//             name: 'Individuals With Health Insurance',
//             data: {
//                 datasets: [{
//                     data: [chartData.insured, chartData.uninsured]
//                 }],
//                 labels: [
//                     "Insured",
//                     "Uninsured"
//                 ]
//             }
//         }
//     )








//     return (
//         <>
//             <Doughnut
//                 data={chartData}
//                 options={{
//                     responsive: true,
//                     maintainAspectRatio: true,
//                 }}

//             />
//         </>
//     )



// }
// export default Charts;