import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "./style.css";

function SearchResults(props) {
    console.log(props)

    return (
        <>

            <Col md="10">

                {
                    props.articles.map((article, a) => (
                        <Row key={a} className="newsRow">

                            <Col md="4">
                                <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                <p className="author"><strong>Author: </strong>{article.author}</p>
                            </Col>

                            <Col md="6" className="newsInfo">
                                <p className="title"><strong>Title: </strong>{article.title}</p>
                                <p className="source"><strong>Source: </strong>{article.source.name}</p>
                                <p className="published"><strong>Date Published: </strong>{article.publishedAt}</p>
                                <p className="published"><strong>About: </strong>{article.content}</p>
                                <a href={article.url} target="_blank" className="btn btn-primary">Click to Read</a>
                            </Col>

                        </Row>
                    ))
                }

            </Col>

        </>
    )
}

export default SearchResults;
