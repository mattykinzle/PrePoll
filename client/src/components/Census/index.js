import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Dropdown from "../Dropdown.js";
import { Button } from "react-bootstrap"


function Census() {

    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState("Williamson County");
    const [countyList, setCountyList] = useState([]);


    useEffect(() => {
        getCensus();
        getCounties();
    }, []);


    //to get data based on users county selection
    function getCensus(e) {


        axios.get('/api/census/' + e).then((response) => {

            setcensusData(response.data);
            console.log(response.data);

        }).catch(err => {
            console.log(err);
        });

    };



    //get all counties from db
    function getCounties() {
        if (countyList.length) { return }
        axios.get("/api/census/").then(res => res.data)
            .then(response => {
                console.log(response);
                setCountyList(response);

            })
        console.log("Heres the county list")
        console.log(countyList);

    };


    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(county)
        getCensus(county)

    }

    return (
        <>

            <form onSubmit={e => handleFormSubmit(e)}>
                <Dropdown countyList={countyList} county={county} setCounty={setCounty} />
                <Button type="submit" value="Submit" />
            </form>

            <div className="chart">
                {/* {censusData[0] ?
                    <Doughnut

                        data={censusData[0].insured}
                        options={{ maintainAspectRatio: false }}
                        width={500}
                        height={500}

                    />
                    :
                    <p>Select a County</p>
                } */}

            </div>
        </>
    )


}
export default Census;