import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

function ArticleHeader() {

    return (
        <>
            <Container fluid className="headerMain">
                <Container className="article-Header">
                    <Row>
                        <h1 className="art-Header">Top News on the 2020 Election</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )

}

export default ArticleHeader;
