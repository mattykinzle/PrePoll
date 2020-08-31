import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



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
        console.log(event.target);
        let saveId = saveArticles[event.target.id].id;
        API.articleDelete(saveId)
            .then(() => articlesSaved())

    }

    return (
        <>
            <Container fluid>
                <Col md="12" className="savedCol">

                    <h3 className="savedHeader">Your Saved Articles <span><p className="scrollhead">(scroll to see more)</p></span></h3>

                    {
                        saveArticles.map((article, a) => (
                            <Row key={a} className="savedRow">

                                <p>{article.title}</p>
                                <Button
                                    className="savedArtBtn"
                                    href={article.url}
                                    target="_blank"
                                >
                                    Read Now
                                    </Button>

                                <Button
                                    id={a}
                                    className="delArtBtn"
                                    onClick={handleArticleDelete}
                                >
                                    Delete <FontAwesomeIcon icon={faTrashAlt} />
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

