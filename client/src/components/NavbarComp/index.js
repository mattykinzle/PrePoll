import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "../../utils/actions";
import { useStoreContext } from '../../utils/GlobalStore';
import API from '../../utils/API';
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Members from "../../pages/Members";
import History from "../../pages/History";
import Landing from "../../pages/Landing";
import News from "../../pages/News";
import CensusInfo from "../../pages/Info";
import About from "../../pages/About/index";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function NavbarComp() {

    // Our provider is setup in index.js so we can use the GlobalStore here easily.

    // Something we want to do at the beginning of the application is check if the user is logged in or not, if the user is, we'll
    // dispatch an action 
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
        API.checkUserInfo().then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            })
        }).catch(err => {
            // Not able to be logged in, leave us logged out
            console.log("error", err);
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }, []);

    const logout = () => {
        API.logout().then(() => {
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }

    return (
        <div>

            {/* Componetize this into Nav */}
            <div>
                {!state.userLoggedIn ? (
                    // if the user is Logged out
                    <>
                        <Navbar>

                            <Link className="navbar-brand" to="/">
                                <span className="red">P</span>
                                <span className="white">r</span>
                                <span className="blue">e</span>
                                <span className="red">P</span>
                                <span className="white">o</span>
                                <span className="blue">l</span>
                                <span className="red">l</span>
                                <span style={{ fontSize: '18px' }}> - Texas </span>
                            </Link>

                            <Nav className="ml-md-auto justify-content-end">
                                <Link className="nav-link active" to="/news">News</Link>
                                <Link className="nav-link active" to="/info"> | Info</Link>
                                <Link className="nav-link active" to="/history"> | History</Link>
                                <Link className="log-link active" to="/login"> Login /</Link>
                                <Link className="log-link active" to="/signup"> Sign Up</Link>
                            </Nav>

                        </Navbar>


                    </>
                ) : (
                        // If the user is Logged In
                        <>
                            <Navbar>

                                <Link className="navbar-brand" to="/">
                                    <span className="red">P</span>
                                    <span className="white">r</span>
                                    <span className="blue">e</span>
                                    <span className="red">P</span>
                                    <span className="white">o</span>
                                    <span className="blue">l</span>
                                    <span className="red">l</span>
                                    <span style={{ fontSize: '18px' }}> - Texas </span>
                                </Link>

                                <Nav className="ml-md-auto justify-content-end">
                                    <Link className="nav-link active" to="/news">News</Link>
                                    <Link className="nav-link active" to="/info"> | Info</Link>
                                    <Link className="nav-link active" to="/history"> | History</Link>
                                    <Link className="log-link active" to="/members"> Members /</Link><a className="log-link" onClick={() => logout()} href="/"> Logout</a>

                                </Nav>

                            </Navbar>
                        </>
                    )
                }
            </div>
            <Switch>
                {

                    !state.userLoggedIn ? (
                        // These routes are only avaialable to LOGGED OUT users
                        <>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/info" component={CensusInfo} />
                            <Route exact path="/about" component={About} />
                            <Route exact path={["/members", "/vote", "/news", "/landing", "/history"]}>
                                {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                <Redirect to="/login" />
                            </Route>

                        </>
                    ) : (
                            // These routes are only available to LOGGED IN users
                            <>
                                <Route exact path={["/login", "/signup"]}>
                                    {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                    <Redirect to="/members" />
                                </Route>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/members" component={Members} />
                                <Route exact path="/news" component={News} />
                                <Route exact path="/info" component={CensusInfo} />
                                <Route exact path="/history" component={History} />
                                <Route exact path="/about" component={About} />

                            </>


                        )
                }
            </Switch>



        </div>
    )
}

export default NavbarComp;


