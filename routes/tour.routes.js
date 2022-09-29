const express = require("express");
const { getTour, createTour } = require("../controlers/tour.controler");
const router = express.Router();

router.route('/')
    .get(getTour)
    .post(createTour)

module.exports = router;