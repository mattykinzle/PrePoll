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
        return axios.get("/api/bing", {
            params: {
                value: search
            }
        })
    },

    landingArticles: function () {
        return axios.get("/api/news/landing")
    },

    articleSave: (article) => {
        console.log(article)
        return axios.post('/api/saveArticle', article);

    },

    voterInformation: voterData => {
        console.log(voterData);
        return axios.get("/api/voterInformation", {
            params: {
                value: voterData
            }
        })
    },

    getBallotItems: function (userInfo) {
        return axios.get("/api/ballotItems", {
            params: {
                congressDist: userInfo.congressDist,
                houseDist: userInfo.houseDist,
                senateDist: userInfo.senateDist,
                sboeDist: userInfo.sboeDist,
                county: userInfo.county
            }
        })
    },

    president: () => {
        return axios.get("/api/president");
    },

    senate: () => {
        return axios.get("/api/senate");
    },

    statewide: () => {
        return axios.get("/api/statewide");
    },

    congress: function (userInfo) {
        console.log(userInfo);
        return axios.get("/api/congress", {
            params: {
                district: userInfo.congressDist
            }
        })
    },

    house: function (userInfo) {
        console.log(userInfo);
        return axios.get("/api/house", {
            params: {
                district: userInfo.houseDist
            }
        })
    },

    sboe: function (userInfo) {
        console.log(userInfo);
        return axios.get("/api/sboe", {
            params: {
                district: userInfo.sboeDist
            }
        })
    },

    stateSenate: function (userInfo) {
        console.log(userInfo);
        return axios.get("/api/stateSenate", {
            params: {
                district: userInfo.senateDist
            }
        })
    },

    countywide: function (userInfo) {
        console.log(userInfo);
        return axios.get("/api/countywide", {
            params: {
                county: userInfo.county
            }
        })
    }
}

//     saved: function () {
//         return axios.get("/api/saved")
//     },



// }
