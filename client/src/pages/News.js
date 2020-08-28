import React from "react";
import Articles from "../components/Articles";
import ArticleHeader from "../components/ArticleHeader";
import { Container } from "react-bootstrap";


function News() {

    return (
        <Container fuid>
            <ArticleHeader />
            <Articles />
        </Container>
    )
}

export default News;