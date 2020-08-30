import React from 'react';
import "./style.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Kinzle from '../../assets/portfoliopic1.png';
import Jones from '../../assets/jones.jpg';
import Vega from '../../assets/vega.png.jpg';
import Meleen from '../../assets/meleen.png';

const About = () => {

    return (
        <div>
            <Container fluid>

                <Container className="aboutHeader">
                    <h1>We the PrePoll</h1>
                </Container>

                <Container>

                    <Col md="12">

                        <Row>

                            <Col className="aboutCol" md="6">
                                <Card className="aboutCard">
                                    <Card.Img className="aboutImg" variant="top" src={Jones} />
                                    <Card.Body>
                                        <Card.Title>Courtney Jones</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="aboutCol" md="6">
                                <Card className="aboutCard">
                                    <Card.Img className="aboutImg" variant="top" src={Vega} />
                                    <Card.Body>
                                        <Card.Title>Daniel Vega</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="aboutCol" md="6">
                                <Card className="aboutCard">
                                    <Card.Img className="aboutImg" variant="top" src={Meleen} />
                                    <Card.Body>
                                        <Card.Title>Matt Meleen</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="aboutCol" md="6">
                                <Card className="aboutCard">
                                    <Card.Img className="aboutImg" variant="top" src={Kinzle} />
                                    <Card.Body>
                                        <Card.Title>Matt Kinzle</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Col>

                </Container>

            </Container>
        </div>

    );
};

export default About;