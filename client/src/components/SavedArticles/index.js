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

    function handleArticleDelete(event) {
        event.preventDefault();
        console.log(event.target.id);
        let saveId = saveArticles[event.target.id].id;
        console.log(saveId);
        API.articleDelete(saveId)
        articlesSaved()
    }


    return (
        <>
            <Container fluid>
                <Col md="6" className="savedCol">

                    <h3 className="savedHeader">Your Saved Articles <span><p className="scrollhead">(scroll to see more)</p></span></h3>

                    {
                        saveArticles.map((article, a) => (
                            <Row key={a} className="savedRow">

                                <p>{article.title}</p>
                                <Button
                                    className="savedArtBtn"
                                    href={article.url}
                                    target="_blank"
                                    size="sm"
                                    variant="link">
                                    Read Now
                                    </Button>

                                <Button
                                    id={a}
                                    className="delArtBtn"
                                    size="sm"
                                    onClick={handleArticleDelete}>
                                    Delete
                                    </Button>



                            </Row>
                        ))
                    }

                </Col>
            </Container>

        </>
    )
}

export default SavedArticles;

