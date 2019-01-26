
// Import express and the burger.js object
const express = require('express');
const burger = require('../models/burger');
// Create the router
const router = express.Router();

// Create the routes
router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/", (req, res) => {});


// export the router
module.exports = router;