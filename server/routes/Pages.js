const express = require("express");
const router = express.Router();
const { addPage, getPages } = require("../controllers/pageController");
const verifyRole = require("../middlewares/verifyRole");
require("dotenv").config();
const multer = require("multer");
const path = require("path");

const imgPath = path.join(__dirname, "..", "public", "img");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log(req.body);

    if (file.fieldname == "home") {
        // console.log(file);
      const homeImg = path.join(imgPath, "home");
      callback(null, homeImg);
    } else if (file.fieldname == "icon") {
        const Icon = path.join(imgPath, "icon");
      callback(null, Icon);
    }
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
  // Sets saved filename(s) to be original filename(s)
});

// Set saved storage options:
const upload = multer({ storage: storage });

const multipleField = upload.fields([{ name: "home" }, { name: "icon" }]);

router.route("/").post(multipleField, addPage).get(getPages);

module.exports = router;
