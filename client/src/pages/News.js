import React from "react";
import Articles from "../components/Articles";
import ArticleHeader from "../components/ArticleHeader";


function News() {

    return (
        <div className="newsMain">
            <ArticleHeader />
            <Articles />
        </div>
    )
}

export default News;