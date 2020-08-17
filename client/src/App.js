import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import { StoreProvider } from './utils/GlobalStore';


function App() {
    return (
        <StoreProvider>
            <Router>
                <div>
                    <Route path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    {
                        // Todo: make this a protected route based off of the context
                    }
                    <Route path="/members" component={Members} /> 
                    <Route path="/signup" component={Signup} />
                </div>
            </Router>
        </StoreProvider>
    );
}

export default App;
