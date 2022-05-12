const express = require('express')
const eventController = require("../Controllers/eventController")
const router = express.Router();
router
    .get("/", eventController.find)
    .patch('/:id', eventController.update)
    .post("/", eventController.create)
module.exports = router
