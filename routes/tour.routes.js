const express = require("express");
const { getTour, createTour, getTourById } = require("../controlers/tour.controler");
const router = express.Router();

router.route('/')
    .get(getTour)
    .post(createTour)

router.route('/:id')
    .get(getTourById)

module.exports = router;