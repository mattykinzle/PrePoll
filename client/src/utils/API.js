import axios from 'axios';

// const apiKey = process.env.REACT_APP_NEWS_API_KEY;
// const articlesQuery = "http://newsapi.org/v2/everything?q=election&apiKey=" + apiKey;

// api/news/everything

const articlesQuery = "http://newsapi.org/v2/everything?q=election&from=2020-08-14&to=2020-08-19&sortBy=popularity&apiKey=c39a9e63856d42c79939c70fc8cd30fc";
// http://newsapi.org/v2/top-headlines?country=us&category=presidential+election&apiKey=c39a9e63856d42c79939c70fc8cd30fc

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/logout");
    },
    articles: function () {
        return axios.get(articlesQuery)
    }
}