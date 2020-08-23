import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import NavbarComp from './components/NavbarComp';



function App() {

    return (

        <Router>
            <div>
                <NavbarComp />
            </div>
        </Router>
    )

}

export default App;
