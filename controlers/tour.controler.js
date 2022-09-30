const { query } = require("express");
const Tour = require("../models/Tour");
const { getTourService } = require("../services/tourServices");

const getTour = async (req, res) => {
    try {
        const filters = { ...req.query };
        const excludeField = ['sort', 'limit', 'page'];
        excludeField.forEach(field => delete filters[field]);

        const queries = {};

        if (req.query.sort) {
            const sort = req.query.sort.split(',').join(' ');
            queries.sort = sort;
        }

        if (req.query.limit) {
            queries.limit = req.query.limit
        }

        if (req.query.page) {
            queries.page = req.query.page;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }

        const result = await getTourService(filters, queries);
        const totalTour = await Tour.count();
        res.status(200).json({
            success: true,
            totalTour,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const createTour = async (req, res) => {
    try {
        const tour = new Tour(req.body);
        const result = await tour.save();
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = { getTour, createTour }