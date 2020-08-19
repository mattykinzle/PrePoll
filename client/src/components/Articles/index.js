import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadArticles()
    }, [])

    const loadArticles = () => {
        API.articles()
            .then(res => {
                setArticles(res.data.articles)
                console.log(res.data.articles)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container-fluid">
            <form className="form-inline searchForm">
                <div className="form-group">
                    <label for="search">Search:</label>
                    <input type="search" className="form-control search-field" id="newsSearchBar" aria-describedby="newsSearch" />
                </div>
                <button type="submit" className="btn btn-primary search-field">Submit</button>
            </form>
            {
                articles.map((article, a) => (
                    <div key={a}>

                        <div className="row newsRow">

                            <div className="col-md-2">
                                <div className="container">
                                    <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-6 newsInfo">
                                <p className="title">Title: {article.title}</p>
                                <p className="author">Author: {article.author}</p>
                                <p className="source">Source: {article.source.name}</p>
                                <p className="published">Date Published: {article.publishedAt}</p>
                                <p className="published">About: {article.content}</p>
                                <a href={article.url} className="btn btn-primary">Click to Read</a>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Articles;

