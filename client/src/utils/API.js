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
        return axios.post('/api/saveArticle', article);

    },

    voterInformation: voterData => {
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
                county: userInfo.county,
                id: userInfo.id
            }
        })
    },

    getBallotTable: function (userInfo) {
        return axios.get("/api/ballotTable", {
            params: {
                id: userInfo.id
            }
        })
    },

    noteSave: (note) => {
        return axios.post('/api/saveNote', note);

    },

    noteUpdate: (note) => {
        return axios.put("/api/updateNote", note);
    },

    noteDelete: (eId) => {
        return axios.delete("/api/deleteNote", {
            params: {
                ElectionId: eId
            }
        })
    },


    choiceSave: (choice) => {
        return axios.post('/api/saveChoice', choice);

    },

    choiceUpdate: (choice) => {
        return axios.put("/api/updateChoice", choice);
    },

    choiceDelete: (choice) => {
        return axios.delete("/api/deleteChoice", {
            params: {
                id: choice.id
            }
        })
    },

    saved: function () {
        return axios.get("/api/saved")
    },

    articleDelete: (saveId) => {
        console.log(saveId)
        return axios.delete("/api/deleteArticle", {
            params: {
                value: saveId
            }
        })
    }



    // president: () => {
    //     return axios.get("/api/president");
    // },

    // senate: () => {
    //     return axios.get("/api/senate");
    // },

    // statewide: () => {
    //     return axios.get("/api/statewide");
    // },

    // congress: function (userInfo) {
    //     return axios.get("/api/congress", {
    //         params: {
    //             district: userInfo.congressDist
    //         }
    //     })
    // },

    // house: function (userInfo) {
    //     return axios.get("/api/house", {
    //         params: {
    //             district: userInfo.houseDist
    //         }
    //     })
    // },

    // sboe: function (userInfo) {
    //     return axios.get("/api/sboe", {
    //         params: {
    //             district: userInfo.sboeDist
    //         }
    //     })
    // },

    // stateSenate: function (userInfo) {
    //     return axios.get("/api/stateSenate", {
    //         params: {
    //             district: userInfo.senateDist
    //         }
    //     })
    // },

    // countywide: function (userInfo) {
    //     return axios.get("/api/countywide", {
    //         params: {
    //             county: userInfo.county
    //         }
    //     })
    // },

}
