import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import SearchResults from "../SearchResults";


function Articles() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        loadArticles("2020 election")
    }, [])

    const loadArticles = (search) => {
        API.articles(search)
            .then(res => {
                setArticles(res.data.articles)
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = event => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        loadArticles(search);
        setSearch("");
    }


    return (
        <>

            <Container fluid className="main">

                <Container fluid >

                    <Form className="form searchForm">

                        <Form.Group as={Row} controlId="searchbar">
                            <Col md="7">
                                <Form.Control
                                    value={search}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Search" />
                            </Col>
                            <Button
                                variant="primary"
                                type="search"
                                onClick={handleFormSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>

                    </Form>

                </Container>

                <Container fluid className="mainNews">

                    <SearchResults articles={articles} />

                    <Col md="2" className="sideBar">

                        <Row className="sideBarRow">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Row>
                        <Row className="sideBarRow">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Row>

                    </Col>

                </Container>

            </Container>
        </>
    )
}

export default Articles;

