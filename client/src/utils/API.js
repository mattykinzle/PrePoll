import axios from 'axios';

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
    articles: function (search) {
        return axios.get("/api/news", {
            params: {
                value: search
            }
        })
    },
    barticles: function (search) {
        console.log(search)
        return axios.get("/api/bing", {
            params: {
                value: search
            }
        })
    },
    garticles: function () {
        return axios.get("/api/gnews")
    }
}