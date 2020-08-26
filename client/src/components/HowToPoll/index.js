import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import newsPic from "../../assets/newsPrepolllg.jpg"
import dataPic from "../../assets/data.jpg"


function HowToPoll() {

    return (
        <>

            <Container fluid className="siteFeatures">

                <Container>

                    <Container className="howToHeader">
                        <center><h1 className="howdy">How to Pre Poll!</h1></center>
                    </Container>
                    <hr />

                    <Row className="featuresRow">

                        <Col md="6" className="featureCol">
                            <Card className="howToCard">
                                <Card.Img variant="top" src={newsPic} className="howToPic" />
                                <Card.Body>
                                    <Card.Title className="howToTitle">Stay Informed</Card.Title>
                                    <Card.Text>
                                        Keep up to date on the most recent election news or search for topics that interest you.
                                </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="6" className="featureCol">
                            <Card className="howToCard">
                                <Card.Img variant="top" src={newsPic} className="howToPic" />
                                <Card.Body>
                                    <Card.Title className="howToTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="6" className="featureCol">
                            <Card className="howToCard">
                                <Card.Img variant="top" src={newsPic} className="howToPic" />
                                <Card.Body>
                                    <Card.Title className="howToTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="6" className="featureCol">
                            <Card className="howToCard">
                                <Card.Img variant="top" src={newsPic} className="howToPic" />
                                <Card.Body>
                                    <Card.Title className="howToTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>

                </Container>

            </Container>



        </>
    )
}

export default HowToPoll;

