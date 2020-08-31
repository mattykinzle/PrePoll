import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import newsPic from "../../assets/news3500x2000.png"
import dataPic from "../../assets/data3500x2000.png"
import ballotPic from "../../assets/ballot3500x2000.png"
import historyPic from "../../assets/history3500x2000.png"


function HowToPoll() {

    return (
        <>

            <Container fluid className="siteFeatures">

                <Container>

                    <Container className="howToHeader">
                        <center><h1 className="howdy">How to Pre Poll!</h1></center>
                    </Container>
                    <hr className="lineBreak" />

                    <Col md="12">

                        <Row className="featuresRow">

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={newsPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Stay Informed</Card.Title>
                                        <Card.Text>
                                            Keep up to date on the most recent election news or search for topics that interest you.
                                </Card.Text>
                                        <Link to="/news" type="button" className="mt-auto howToBtn" variant="primary">Get the News</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={dataPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Know your County</Card.Title>
                                        <Card.Text>
                                            The US census provides many great insights on how your county is holding up! Click below to see what's good in the hood.
                                </Card.Text>
                                        <Link to="/info" type="button" className="mt-auto howToBtn" variant="primary">Get Census Info</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={historyPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">The History of Voting</Card.Title>
                                        <Card.Text>
                                            Learn more about the history of voting in our country. 
                                </Card.Text>
                                        <Link to="/history" type="button" className="mt-auto howToBtn" variant="primary">Learn the History</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                             <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={ballotPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Get Your Ballot</Card.Title>
                                        <Card.Text>
                                            Log into your account to get data based on where you live. 
                                </Card.Text>
                                        <Link to="/members" type="button" className="mt-auto howToBtn" variant="primary">Log in</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Col>

                </Container>

            </Container>



        </>
    )
}

export default HowToPoll;

