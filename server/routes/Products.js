const express = require("express");
const {
  getProducts,
  addProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const imgPath = path.join(__dirname, "..", "public", "img");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log(file);
    if (file.fieldname == "png") {
      const homeImg = path.join(imgPath, "png");
      callback(null, homeImg);
    } else if (file.fieldname == "gallery") {
      const Icon = path.join(imgPath, "gallery");
      callback(null, Icon);
    } else if (file.fieldname == "pub") {
      const Icon = path.join(imgPath, "pub");
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

const multipleField = upload.fields([
  { name: "png" },
  { name: "pub" },
  { name: "gallery" },
]);
// upload.any()

router
  .route("/")
  .get(getProducts)
  .post(multipleField, addProduct)
  .put(multipleField, updateProduct);

module.exports = router;
