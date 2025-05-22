const express = require("express");
const { createUserMsg } = require("../controller/user");
const router = express.Router();

router.post("/", createUserMsg);

module.exports = router;
