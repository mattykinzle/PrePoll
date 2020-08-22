import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';

function Signup() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            zip: zipRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
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