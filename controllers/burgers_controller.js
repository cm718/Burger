// Import express and the burger.js object
const express = require('express');
const burger = require('../models/burger');
// Create the router
const router = express.Router();

// Create the routes
router.get("/", (req, res) => {
  burger.selectAll(function (burgerData) {
    res.render("index", {
      burger_data: burgerData
    });
  });
});

router.get("/", (req, res) => {
  burger.selectAll(function (burgerData) {
    res.render("index", {
      burger_data: burgerData
    });
  });
});

router.post("/burgers/create", function (req, res) {
  burger.insertOne(
    req.body.burger_name,
    function (result) {
      console.log(result);
      // Send back the ID of the new quote
      res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
  burger.updateOne(
    req.params.id,
    function (result) {
      console.log(result)
      res.sendStatus(200);
    });
});

// export the router
module.exports = router;