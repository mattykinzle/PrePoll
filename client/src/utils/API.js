import axios from 'axios';

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    getUserInfo: (email) => {
        return axios.get(`/api/users/${email}`);
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
    bing: function (search) {
        console.log(search)
        return axios.get("/api/bing", {
            params: {
                value: search
            }
        })
    },
    landingArticles: function() {
        return axios.get("/api/news/landing")
    },

    voterInformation: voterData => {
        console.log(voterData);
        return axios.get("/api/voterInformation", {
            params:{
                value:voterData
            }
        })
    }
}