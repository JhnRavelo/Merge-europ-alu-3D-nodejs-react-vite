const express = require("express");
const router = express.Router();
const {
  addPage,
  getPages,
  updatePage,
  deletePage,
} = require("../controllers/pageController");
const verifyRole = require("../middlewares/verifyRole");
require("dotenv").config();
const multer = require("multer");
const path = require("path");
const verifyJWT = require("../middlewares/verifyJWT");

const imgPath = path.join(__dirname, "..", "public", "img");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log(file);
    if (file.fieldname == "home") {
      const homeImg = path.join(imgPath, "home");
      callback(null, homeImg);
    } else if (file.fieldname == "icon") {
      const Icon = path.join(imgPath, "icon");
      callback(null, Icon);
    }
  },

  filename: function (req, file, callback) {
    callback(null, Buffer.from(file.originalname, "latin1").toString("utf8"));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Seules les images sont autorisées."));
    }
  },
  encoding: "utf-8",
});

const multipleField = upload.fields([{ name: "home" }, { name: "icon" }]);

router.get("/", getPages)


// router.use(verifyJWT);

// router.use(verifyRole(process.env.PRIME1));

// router.use(multipleField)

router
  .route("/")
  .post(addPage)
  .put(updatePage);

router.delete("/:id", deletePage);

module.exports = router;
