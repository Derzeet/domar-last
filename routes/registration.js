const express = require("express");
const router = express.Router();
var path = require('path');
const createUser = require('../Controllers/user')
router
    .route("/")
    .get((req, res) => res.render(path.resolve("public/html/register.ejs")))
    .post(createUser.create)
module.exports = router;
