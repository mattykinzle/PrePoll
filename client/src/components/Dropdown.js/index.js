import React, { useEffect, useState } from "react";



function Dropdown({ countyList }) {
    console.log(countyList);

    function changeCounty(e) {
        console.log(e)
        // setCounty(e.target.name)
    }


    return (
        <>
            {countyList ?
                <div>
                    <label>
                        Select A County
            </label>

                    <select name="theCounty" >

                        {
                            countyList.map((county, index) => (

                                <option key={index} value={county}> {county.county} </option>


                            ))
                        }

                    </select>
                </div> :
                <div>
                    "Waiting for a county."
            </div>

            }

        </>


    )

}

export default Dropdown;