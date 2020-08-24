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

            <Container fluid >

                <Container fluid >

                    <Col md="12" className="mainArticles">

                        <center><h1> Top Election 2020 News Stories </h1></center>

                        <hr />
                        <Row>

                            {
                                articles.map((article, a) => (


                                    <Col md="3" key={a} className="articleCol">

                                        <Card>
                                            <Card.Img variant="top" src={article.image.thumbnail.contentUrl} className="landingImg" />
                                            <Card.Body>
                                                <Card.Title>{article.name}</Card.Title>
                                                <Card.Text>
                                                    {article.description}
                                                </Card.Text>
                                                <Button href={article.url} target="_blank" variant="primary">Read Article</Button>
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

