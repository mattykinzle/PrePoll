// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");

module.exports = function (app) {
  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip,
      email: req.body.email,
      password: req.body.password,
      county: req.body.county,
      congressDist: req.body.congressDist,
      houseDist: req.body.houseDist,
      senateDist: req.body.senateDist,
      sboeDist: req.body.sboeDist
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      console.log(req.user)
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        county: req.user.county
      });
    }
  });

  // Route to call News API
  app.get("/api/news", (req, res) => {
    axios.get("https://newsapi.org/v2/everything?q=" + req.query.value + "&sortBy=popularity&apiKey=" + process.env.NEWS_API_KEY).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  });

  // Route to call Bing News API
  app.get("/api/bing", (req, res) => {
    axios.get('https://api.cognitive.microsoft.com/bing/v7.0/news/search', {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.BING_NEWS_API_KEY
      },
      params: {
        count: 1,
        freshness: "week",
        mkt: 'en-US',
        q: req.query.value
      }
    }).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  });

  //Route to save article
  app.post('/api/saveArticle', function (req, res) {
    db.Article.create({
      title: req.body.title,
      source: req.body.source.name,
      author: req.body.author,
      content: req.body.content,
      publishedAt: req.body.publishedAt,
      img: req.body.urlToImage,
      UserId: req.user.id
    })
      .then(function (results) {
        //console.log(results);
        res.json(results);
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/news/landing", (req, res) => {
    axios.get('https://api.cognitive.microsoft.com/bing/v7.0/news/search', {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.BING_NEWS_API_KEY
      },
      params: {
        count: 4,
        freshness: "week",
        mkt: 'en-US',
        q: "2020 election"
      }
    }).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  });

  //Route to get District information
  app.get("/api/voterInformation", (req, res) => {
    // console.log('THIS IS THE VALUE' + req.query.value);
    const { address, city, zip } = JSON.parse(req.query.value);
    const addressArr = address.split(' ');

    axios.get(`https://rws.capitol.texas.gov/api/MatchAddress?Address=${addressArr[0]}%20${addressArr[1]}&City=${city}&Zip=${zip}&DistType=A`).then(response => {
      // console.log(response.data);
      res.json(response.data)
    }).catch(err => {
      res.status(err.status).send(err.message);
    })

  });

  //route to get census data by county
  app.get("/api/census/:county", (req, res) => {
    // console.log('Were here api Route')
    db.Censuscounties.findAll({ where: [{ county: req.params.county }] })
      .then(response => {
        // console.log(response);
        res.json(response);
      }).catch(err => {
        console.log(err);
      })

  })

  //get route to get all counties from census data
  app.get("/api/census/", (req, res) => {
    db.Censuscounties.findAll({ attributes: ["county"] })
      .then(response => {
        // console.log('backend census stuff')
        // console.log(response);
        res.json(response)
      }).catch(err => {
        console.log(err);
      })
  })

  app.get("/api/president", (req, res) => {
    db.Election.findAll({
      where: {
        office: 'U. S. PRESIDENT'
      },
      include: [{
        model: db.Candidate,
        attributes: ['candidate', 'party', 'isIncumbent'],
        required: true
      }]
    }).then(response => {
      // console.log(response[0].dataValues.Candidates);
      res.json(response);
    }).catch(err => {
      console.log(err);
    })
  })

};
// bing 3898b393ea014ed68631a30d65665d94

