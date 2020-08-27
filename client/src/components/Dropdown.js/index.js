import React, { useEffect, useState } from "react";



function Dropdown({ countyList, county, setCounty }) {

    function changeCounty(e) {
        setCounty(e.target.value)
    }


    return (
        <>
            {countyList ?
                <div>
                    <label >

                    </label>

                    <select name="theCounty" value={county} onChange={e => changeCounty(e)} placeholder={'Select a County'} >

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