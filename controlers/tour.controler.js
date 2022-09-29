const Tour = require("../models/Tour")

const getTour = async (req, res) => {
    try {
        const result = await Tour.find({});
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