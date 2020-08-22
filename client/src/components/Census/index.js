import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Dropdown from "../Dropdown.js";
import { Button } from "react-bootstrap"

function Census() {

    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState('Williamson County');
    const [countyList, setCountyList] = useState([]);


    useEffect(() => {
        // getCensus();
        getCounties();
    }, []);


    //to get data based on users county selection
    function getCensus() {
        if (county === 'undefined') {
            axios.get('/api/census/' + 'Williamson County').then(res => res.data)
                .then(response => {
                    setcensusData(response);
                    // console.log(response.data);
                })
        } else {
            axios.get('/api/census/' + county).then((response) => {

                setcensusData(response.data);
                // console.log(response.data);

            }).catch(err => {
                console.log(err);
            });

        }
        console.log("Heres the census data")
        console.log(censusData)
    };



    //get all counties from db
    function getCounties() {
        axios.get("/api/census/").then(res => res.data)
            .then(response => {
                console.log(response);
                setCountyList(response);

            })
        console.log("Heres the county list")
        console.log(countyList);
    };


    return (
        <>
            <form >
                <Dropdown listOfCounties={countyList} />
                <Button type="submit" value="Submit" />
            </form>
            {/* <div className="chart">
                <Doughnut

                    data={censusData.insured}
                    options={{ maintainAspectRatio: false }}

                />
            </div> */}
        </>
    )


}
export default Census;