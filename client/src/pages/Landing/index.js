import React from 'react';
import "./style.css";
import Countdown from '../../components/Countdown/index.';
import NewsLanding from '../../components/NewsLanding/index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Landing = () => {

    return (
        <div>
            <Countdown />
            <NewsLanding />

            {/* <Container fluid>
                <Col md="12">
                    <Row className="landingRow">

                        <Col md="5">
                            <Card className="thingsToDo">
                                <Card.Img variant="top" className="cardImg" src="https://i.imgur.com/RM3VlAl.png" />
                                <Card.Body>
                                    <Card.Title>Voting, a History</Card.Title>
                                    <Card.Text>
                                        Click below to see how your voting rights have changed over time,
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere <FontAwesomeIcon icon={faCoffee} /></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="5">
                            <Card className="thingsToDo">
                                <Card.Img variant="top" className="cardImg" src="https://i.imgur.com/RM3VlAl.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col> */}


            {/* </Row>
                </Col> */}
            {/* </Container> */}
        </div >

    );
};

export default Landing;