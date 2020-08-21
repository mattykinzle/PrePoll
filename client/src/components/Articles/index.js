import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/API.js';
import Countdown from "../Countdown/index.";
import Navbar from "../Navbar/index.js";

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
        <>
            <Navbar />
            <Countdown />

            <div className="container-fluid">

                <form className="form-inline searchForm">
                    <div className="form-group">
                        <label for="search">Search:</label>
                        <input type="search" className="form-control search-field" id="newsSearchBar" aria-describedby="newsSearch" />
                    </div>
                    <button type="submit" className="btn btn-primary search-field">Submit</button>
                </form>
            </div>

            <div className="container-fluid">

                {
                    articles.map((article, a) => (
                        <div key={a}>

                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="img-fluid">
                                            <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="title"><strong>Title: </strong>{article.title}</p>
                                        <p className="author"><strong>Author: </strong>{article.author}</p>
                                        <p className="source"><strong>Source: </strong>{article.source.name}</p>
                                        <p className="published"><strong>Date Published: </strong>{article.publishedAt}</p>
                                        <p className="published"><strong>About: </strong>{article.content}</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 sideBar">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="container">
                                            <img src={article.urlToImage} alt={article.title} className="img-fluid sideImg" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="container">

                                <div className="row newsRow">

                                    <div className="col-sm-12 col-lg-2 newsImg">
                                        <div className="img-fluid">
                                            <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                        </div>
                                        <a href={article.url} className="btn btn-primary">Click to Read</a>
                                    </div>

                                    <div className="col-lg-6 d-none d-lg-block newsInfo">
                                        <p className="title"><strong>Title: </strong>{article.title}</p>
                                        <p className="author"><strong>Author: </strong>{article.author}</p>
                                        <p className="source"><strong>Source: </strong>{article.source.name}</p>
                                        <p className="published"><strong>Date Published: </strong>{article.publishedAt}</p>
                                        <p className="published"><strong>About: </strong>{article.content}</p>
                                    </div>

                                </div>

                            </div>

                            <div className="container">

                                <div className="col-lg-4 d-none d-lg-block newsVid">
                                    <div className="img-fluid">
                                        <img src={article.urlToImage} alt={article.title} className="artImg img-fluid" />
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default Articles;

