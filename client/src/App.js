import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {

    return (

        <Router>
            <div>
                <Wrapper>
                    <NavbarComp />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    )

}

export default App;
