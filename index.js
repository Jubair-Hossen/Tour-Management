const express = require("express");
const cors = require("cors");
const server = require("./server");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
const tourRoute = require('./routes/tour.routes');

server(app);

app.use('/api/v1/tours', tourRoute)