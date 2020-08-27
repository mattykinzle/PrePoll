import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import newsPic from "../../assets/newsPrepolllg.jpg"
import dataPic from "../../assets/data.jpg"


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

                <Container className="topHeader">
                    <center><h1> Top Election 2020 News Stories </h1></center>
                </Container>
                <hr />

                <Row>

                    {
                        articles.map((article, a) => (


                            <Col md="3" key={a} className="articleCol">

                                <Card>
                                    <center><Card.Img variant="top" src={(article.image) ? article.image.thumbnail.contentUrl : ''} className="landingImg" /></center>
                                    <Card.Body>
                                        <Card.Title className="cardText">{article.name}</Card.Title>
                                        <Card.Text className="cardText">
                                            {article.description}
                                        </Card.Text>
                                        <Button href={article.url} target="_blank" variant="primary">Read Article</Button>
                                    </Card.Body>
                                </Card>

                            </Col>

                        ))
                    }

                </Row>

            </Container>

        </>
    )
}

export default NewsLanding;

