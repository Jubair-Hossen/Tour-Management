const express = require("express");
const { getTour, createTour, getTourById, updateATour, getTrendingTour } = require("../controlers/tour.controler");
const router = express.Router();

router.route('/trending')
    .get(getTrendingTour)

router.route('/')
    .get(getTour)
    .post(createTour)

router.route('/:id')
    .get(getTourById)
    .patch(updateATour)

module.exports = router;