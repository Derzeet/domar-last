const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user")

var path = require('path');
router
    .route("/")
    .get((req, res) => res.render(path.resolve("public/html/login.ejs")))
    .post(userController.login)
module.exports = router;
