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
      password: req.body.password
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
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Route to call News API
  app.get("/api/news", (req, res) => {
    axios.get("http://newsapi.org/v2/everything?q=election&from=2020-08-14&to=2020-08-19&sortBy=popularity&apiKey=" + process.env.NEWS_API_KEY).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.status(err.status).send(err.message)
    })
  });

  app.get("/api/census/:county", (req, res) => {
    console.log('Were here api Route')
    db.Censuscounties.findAll({ where: [{ county: req.params.county }] })
      .then(response => {
        // console.log(response);
        res.json(response);
      }).catch(err => {
        console.log(err);
      })

  })

  //get route to get all counties
  app.get("/api/census/", (req, res) => {
    db.Censuscounties.findAll({ attributes: ["county"] })
      .then(response => {
        console.log(response);
        res.json(response)
      }).catch(err => {
        console.log(err);
      })

  })

};
