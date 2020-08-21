import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Navbar";
import axios from 'axios';

function Census() {

    const [censusData, setcensusData] = useState([]);
    const [county, setCounty] = useState('Brazoria County');


    useEffect(() => {

        getCensus();

    }, []);


    function getCensus() {

        axios.get('/api/census/' + county).then((response) => {
            console.log("Axios is here");
            setcensusData(response.body);
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    };



    return (
        <Navbar />


    )


}
export default Census;