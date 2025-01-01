const express = require("express");
const router = express.Router();
const { UsersCount } = require("../controllers/userCountController");

router.get("/", UsersCount);


module.exports = router;
