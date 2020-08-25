import React, { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// import Autocomplete from 'react-google-autocomplete';
// import { GoogleMapsAPI } from '../client-config'; 
// Geocode.setApiKey(GoogleMapsAPI);
// Geocode.enableDebug();

function Signup() {

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // const [lat, setLat] = useState(30.259024);
    // const [lng, setLng] = useState(-97.7144622);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [, dispatch] = useStoreContext();

    // useState vs useRef
    // useEffect

    // useEffect(() => {
    //     Geocode.fromLatLng(lat,lng).then(
    //         response => {
    //             console.log(response);
    //         }
    //     ).catch(err => {
    //         console.log(err);
    //     })
    //   }, [])


    const handleSignup = (event) => {
        event.preventDefault();

        const signupData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: 'Texas',
            zip: zipRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        API.voterInformation(signupData).then(response => {
            console.log(response.data);
            const county = response.data.Address.attributes[0].valu;
            const congressDistrict = response.data.Congress[0].District;
            const texasHouse = response.data.House[0].District;
            const texasSenate = response.data.Senate[0].District;
            const sboeDistrict = response.data.Sboe[0].District;

            console.log(`You live in ${county} county. Your U.S. congressional district is ${congressDistrict}. Your Texas congressional district is ${texasHouse}. Your Texas Senate district is ${texasSenate}. Your State Board of Education district is ${sboeDistrict}`);

            signupData.county = county;
            signupData.congressDist = congressDistrict;
            signupData.houseDist = texasHouse;
            signupData.senateDist = texasSenate;
            signupData.sboeDist = sboeDistrict;
            console.log(signupData);

            API.signup(signupData).then(response => {
                const { email } = response.data;
                dispatch({
                    type: AUTH_SET_LOGGED_IN,
                    data: {
                        email
                    }
                });
            }).catch(err => {
                setShowError(true);
                setErrorMessage("An error occurred while signing up");
            })

        }).catch(error => {
            console.log(error);
        })
    }

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form className="signup" onSubmit={handleSignup}>
                        {/* First Name  */}
                        <div className="form-group">
                            <label htmlFor="inputFirstName">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" ref={firstNameRef} />
                        </div>
                        {/* Last Name  */}
                        <div className="form-group">
                            <label htmlFor="inputLastName">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" ref={lastNameRef} />
                        </div>
                        {/* Address  */}
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" placeholder="Address" ref={addressRef} />
                        </div>
                        {/* City  */}
                        <div className="form-group">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" placeholder="City" ref={cityRef} />
                        </div>
                        {/* Zip  */}
                        <div className="form-group">
                            <label htmlFor="inputZip">Zip Code</label>
                            <input type="text" className="form-control" placeholder="Zip Code" ref={zipRef} />
                        </div>
                        {/* Email  */}
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        {/* Password  */}
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>

                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <Link to="/login">here</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Signup;