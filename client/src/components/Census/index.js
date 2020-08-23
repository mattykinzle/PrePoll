import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
// import Chart from 'chart.js';
import Dropdown from "../Dropdown.js";
import { Button } from "react-bootstrap"


function Census() {

    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState("Williamson County");
    const [countyList, setCountyList] = useState([]);
    const [chartData, setChartData] = useState();


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
        console.log(e);
        console.log(e[0].insured)

        setChartData(
            {
                name: 'Health Insurance',
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

            <form onSubmit={e => handleFormSubmit(e)}>
                <Dropdown countyList={countyList} county={county} setCounty={setCounty} />
                <Button type="submit" value="Submit">Search</Button>
            </form>

            <div className="chart">
                {censusData[0] ?
                    <Doughnut data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true
                        }}
                    // height={500}
                    // width={700}
                    />
                    :
                    <p>Select a County</p>
                }

            </div>
        </>
    )


}
export default Census;