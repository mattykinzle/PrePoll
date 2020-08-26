import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"


function SavedArticles() {
    const [saveArticles, setSaveArticles] = useState([]);

    useEffect(() => {
        articlesSaved()
    }, [])

    const articlesSaved = () => {
        API.saved()
            .then(res => {
                setSaveArticles(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Container fluid>
                <Col md="6" className="savedCol">

                    <h3 className="savedHeader">Your Saved Articles</h3>

                    {
                        saveArticles.map((article, a) => (
                            <Row key={a} className="savedRow">

                                <p>{article.title}</p>
                                {/* <p>{article.about}</p> */}
                                <Button className="savedArtBtn" href={article.url} target="_blank" size="sm" variant="link">Read Now</Button>

                                {/* <p>{article.url}</p> */}

                            </Row>
                        ))
                    }

                </Col>
            </Container>

        </>
    )
}

export default SavedArticles;

