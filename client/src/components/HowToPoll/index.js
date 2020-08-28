import React from "react";
import "./style.css";
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
                                        <Button className="mt-auto" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={dataPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Know your County</Card.Title>
                                        <Card.Text>
                                            The US census provides many great insights on how your counti holding up! Click below to see what's good in the hood.
                                </Card.Text>
                                        <Button className="mt-auto" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={ballotPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                </Card.Text>
                                        <Button className="mt-auto" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="5" className="featureCol">
                                <Card className="howToCard h-100">
                                    <Card.Img variant="top" src={historyPic} className="howToPic" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="howToTitle">Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                </Card.Text>
                                        <Button className="mt-auto" variant="primary">Go somewhere</Button>
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

