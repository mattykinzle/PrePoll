import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import SearchResults from "../SearchResults";
import ad from "../../assets/AdPreview.png"


function Articles() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        loadArticles("2020 election")
    }, [])

    const loadArticles = (search) => {
        API.bing(search)
            .then(res => {
                setArticles(res.data.value)
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

    function handleArticleLike(event) {
        event.preventDefault();
        let saveId = event.target.id
        API.articleSave({
            title: articles[saveId].name,
            about: articles[saveId].description,
            url: articles[saveId].url
        })
    }

    return (
        <>

            <Container className="main">

                <Container >

                    <Form className="form searchForm">

                        <Form.Group as={Row} >
                            <Col md="7" className="searchBar">
                                <Form.Control
                                    value={search}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Search" />
                            </Col>
                            <Button
                                className="submitBtn"
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

                    <SearchResults
                        articles={articles}
                        handleArticleLike={handleArticleLike}
                    />

                    <Col md="2" className="sideBar">

                        <Row className="sideBarRow">
                            <img src={ad} alt="ad" className="adPic" />
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

