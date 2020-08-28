import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


function NewsLanding() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        homeArticles()
    }, [])

    const homeArticles = () => {
        API.landingArticles()
            .then(res => {
                setArticles(res.data.value)
            })
            .catch(err => console.log(err));
    }

    return (
        <>

            <Container fluid className="mainArticles">

                <Container>

                    <Container className="topHeader">
                        <center><h1> Top Election 2020 News Stories </h1></center>
                    </Container>
                    <hr className="newsLine" />

                    <Col md="12">

                        <Row className="landRow">

                            {
                                articles.map((article, a) => (

                                    <Col key={a} md="3" className="newsCol">

                                        < Card className="newsCard h-100">
                                            <center><Card.Img variant="top" src={(article.image) ? article.image.thumbnail.contentUrl : ''} className="landingImg" /></center>
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title className="cardText">{article.name.substring(0, 80)}...</Card.Title>
                                                <Card.Text className="cardText">
                                                    {article.description.substring(0, 80)}...
                                            </Card.Text>
                                                <Button className="mt-auto" href={article.url} target="_blank" variant="primary">Read Article</Button>
                                            </Card.Body>
                                        </Card>

                                    </Col>

                                ))
                            }

                        </Row>

                    </Col>

                </Container>

            </Container>

        </>
    )
}

export default NewsLanding;