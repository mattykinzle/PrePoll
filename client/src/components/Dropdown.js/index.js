import React, { useEffect, useState } from "react";



function Dropdown({ countyList, county, setCounty }) {
    console.log(countyList);

    function changeCounty(e) {
        console.log(e.target.value)
        setCounty(e.target.value)
    }


    return (
        <>
            {countyList ?
                <div>
                    <label>
                        Select A County
            </label>

                    <select name="theCounty" value={county} onChange={e => changeCounty(e)} >

                        {
                            countyList.map((county, index) => (

                                <option key={index} value={county.county}> {county.county} </option>


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