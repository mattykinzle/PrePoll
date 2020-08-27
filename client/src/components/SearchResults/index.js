import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

import "./style.css";

function SearchResults(props) {
    console.log(props)

    return (
        <>

            <Col md="10">

                {
                    props.articles.map((article, a) => (
                        <Row key={a} className="newsRow">

                            <Col md="2">
                                <img src={(article.image) ? article.image.thumbnail.contentUrl : ''} alt={article.title} className="artImg img-fluid" />
                                <a href={article.url} target="_blank" className="btn article-btn">Click to Read</a>
                            </Col>

                            <Col md="8" className="newsInfo">
                                <p className="title"><strong>{article.name}</strong></p>
                                <hr />
                                <p className="about"><strong></strong>{article.description}</p>
                                <p className="source">Source: {article.provider[0].name}</p>
                                <p className="published">Date Published: {new Date(article.datePublished).toString('MM dd yyyy').substring(0, 15)}</p>
                                <Button
                                    id={a}
                                    variant="primary"
                                    type="submit"
                                    onClick={props.handleArticleLike}
                                >
                                    Save  <FontAwesomeIcon icon={faSave} />
                                </Button>
                            </Col>

                        </Row>
                    ))
                }

            </Col>

        </>
    )
}

export default SearchResults;
