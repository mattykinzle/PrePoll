import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../NavbarComp";
import axios from "axios";
// import { Doughnut } from "react-chartjs-2"

function Census() {

    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState('Brazoria County');


    useEffect(() => {

        getCensus();

    }, []);


    function getCensus() {

        axios.get('/api/census/' + county).then((response) => {

            setcensusData(response.data);
            console.log(response.data);

        }).catch(err => {
            console.log(err);
        });
        console.log(censusData);
    };

    axios.get("/api/census/").then((response) => {
        console.log(response);
    })




    return (
        <>
            {/* <InputGroup className="md-3">
            <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1"
            >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            </InputGroup> */}
            <div className="chart">
                {/* <Doughnut */}

                    data={censusData.insured}
                    options={{ maintainAspectRatio: false }}

                {/* /> */}
            </div>
        </>
    )


}
export default Census;