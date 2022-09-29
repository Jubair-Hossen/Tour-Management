const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    tittle: {
        type: String,
        required: [true, 'Tour tittle is required'],
        trim: true,
        unique: true,
        minLength: [4, 'name must be at least 4 characters'],
        maxLength: [150, 'name is to large']
    },
    description: {
        type: String,
        required: true,
        minLength: [50, "description must be at least 50 characters"]
    },
    departure: {
        type: String,
        required: [true, "departure is required"]
    },
    destination: {
        type: String,
        required: true
    },
    transport: {
        type: String,
        required: true,
    },
    breakfast: {
        type: String,
        enum: {
            values: ['include', 'not include'],
            message: "can be 'include' or 'not include'"
        }
    },
    lunch: {
        type: String,
        enum: {
            values: ['include', 'not include'],
            message: "can be 'include' or 'not include'"
        }
    },
    dinner: {
        type: String,
        enum: {
            values: ['include', 'not include'],
            message: "can be 'include' or 'not include' only"
        }
    },
    duration: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: "can be 'in-stock' or 'out-of-stock' or 'discontinued' only"
        }
    },
    "price": {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Tour = mongoose.model('tours', tourSchema)

module.exports = Tour;