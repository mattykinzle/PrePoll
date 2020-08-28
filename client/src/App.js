import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import ScrollTopArrow from './components/ScrollTopArrow/ScrollTopArrow';


function App() {

    return (

        <Router>
            <ScrollTopArrow />
            <Wrapper>
                <NavbarComp />
            </Wrapper>
            <Footer />
        </Router>
    )

}

export default App;
