import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadArticles()
    }, [])

    const loadArticles = () => {
        API.articles()
            .then(res => {
                setArticles(res.data.articles)
                console.log(res.data.articles)
            })
            .catch(err => console.log(err));
    }

    return (
        <>

            <Container fluid className="main">

                <Container fluid >

                    <Form className="form searchForm">

                        <Form.Group as={Row} controlId="searchbar">
                            <Col md="7">
                                <Form.Control type="search" placeholder="Search" />
                            </Col>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form.Group>

                    </Form>

                </Container>

                <Container fluid className="sideBar">

                    {
                        articles.map((article, a) => (
                            <div key={a}>
                                <Col md="10">
                                    <Row className="newsRow">
                                        <Col md="4">
                                            <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                            <p className="author"><strong>Author: </strong>{article.author}</p>

                                        </Col>
                                        <Col md="6" className="newsInfo">
                                            <p className="title"><strong>Title: </strong>{article.title}</p>
                                            <p className="source"><strong>Source: </strong>{article.source.name}</p>
                                            <p className="published"><strong>Date Published: </strong>{article.publishedAt}</p>
                                            <p className="published"><strong>About: </strong>{article.content}</p>
                                            <a href={article.url} className="btn btn-primary">Click to Read</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="2">
                                    <Col md="2">
                                        <p>Hello world</p>
                                    </Col>
                                </Col>
                            </div>

                        ))
                    }
                </Container>
            </Container>
        </>
    )
}

export default Articles;

