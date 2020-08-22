import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import News from "./pages/News";
import CensusInfo from "./pages/Info";
import Landing from "./pages/Landing";
import History from "./pages/History";
import { useStoreContext } from './utils/GlobalStore';
import API from './utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "./utils/actions";
import NavbarComp from './components/NavbarComp';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"



function App() {

    return (

        <Router>
            <div>
                <NavbarComp />
            </div>
        </Router>
    )

    //     < Router >

    //     <div>
    //         {/* Componetize this into Nav */}
    //         <div>
    //             {!state.userLoggedIn ? (
    //                 // if the user is Logged out
    //                 <>
    //                     <Navbar>

    //                         <Link className="navbar-brand" to="/">
    //                             <span className="red">P</span>
    //                             <span className="white">r</span>
    //                             <span className="blue">e</span>
    //                             <span className="red">P</span>
    //                             <span className="white">o</span>
    //                             <span className="blue">l</span>
    //                             <span className="red">l</span>
    //                         </Link>

    //                         <Nav className="ml-md-auto justify-content-end">
    //                             <Link className="nav-link active" to="/news">News  |</Link>
    //                             <Link className="nav-link active" to="/vote">Vote  |</Link>
    //                             <Link className="nav-link active" to="/info">Info  |</Link>
    //                             <Link className="nav-link active" to="/history">History</Link>
    //                             <Link className="log-link active" to="/login">Login /</Link>
    //                             <Link className="log-link active" to="/signup"> Sign Up</Link>
    //                         </Nav>

    //                     </Navbar>
    //                 </>
    //             ) : (
    //                     // If the user is Logged In
    //                     <>
    //                         <Navbar>

    //                             <Link className="navbar-brand" to="/">
    //                                 <span className="red">P</span>
    //                                 <span className="white">r</span>
    //                                 <span className="blue">e</span>
    //                                 <span className="red">P</span>
    //                                 <span className="white">o</span>
    //                                 <span className="blue">l</span>
    //                                 <span className="red">l</span>
    //                             </Link>

    //                             <Nav className="ml-md-auto justify-content-end">
    //                                 <Link className="nav-link active" to="/news">News  |</Link>
    //                                 <Link className="nav-link active" to="/vote">Vote  |</Link>
    //                                 <Link className="nav-link active" to="/info">Info  |</Link>
    //                                 <Link className="nav-link active" to="/history">History</Link>
    //                                 <Link to="/members">Members</Link> | <a onClick={() => logout()} href="#">Logout</a>

    //                             </Nav>

    //                         </Navbar>
    //                     </>
    //                 )
    //             }
    //         </div>
    //         <Switch>
    //             {

    //                 !state.userLoggedIn ? (
    //                     // These routes are only avaialable to LOGGED OUT users
    //                     <>
    //                         <Route exact path="/login" component={Login} />
    //                         <Route exact path="/signup" component={Signup} />
    //                         <Route exact path="/history" component={History} />
    //                     </>
    //                 ) : (
    //                         // These routes are only available to LOGGED IN users
    //                         <>
    //                             <Route exact path={["/login", "/signup"]}>
    //                                 {/* If you are logged in, going to the login/signup page will take you to the members page */}
    //                                 <Redirect to="/members" />
    //                             </Route>
    //                             <Route exact path="/members" component={Members} />
    //                         </>
    //                     )
    //             }
    //             {
    //                 /* These routes are ALWAYS available */
    //             }
    //             <Route>
    //                 { /*If none of the other pages match, redirect them to the main page */}
    //                 <Redirect to="/" />
    //             </Route>
    //         </Switch>
    //         <Route exact path="/" component={Landing} />
    //         <Route exact path="/news" component={News} />
    //         <Route exact path="/info" component={CensusInfo} />
    //         <Route exact path="/landing" component={Landing} />
    //         <Route exact path="/history" component={History} />


    //     </div>
    //     </Router >
    // );
}

export default App;
