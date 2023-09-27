const express = require("express");
const router = express.Router();
const { addPage, getPages } = require("../controllers/pageController");
const verifyRole = require("../middlewares/verifyRole");
require("dotenv").config();

router.route("/").post(addPage)
                .get(getPages);

module.exports = router;
