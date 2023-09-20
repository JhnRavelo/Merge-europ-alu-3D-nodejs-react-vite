const express = require("express");
const router = express.Router();
const { addPage } = require("../controllers/pageController");
const verifyRole = require("../middlewares/verifyRole");
require("dotenv").config();

router.route("/").post(verifyRole(process.env.ADMIN), addPage);

module.exports = router;
