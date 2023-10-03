const express = require("express");
const router = express.Router();
require("dotenv").config();
const {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getCommercials,
} = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyRole = require("../middlewares/verifyRole");
const multer = require("multer");
const path = require("path")

const imgPath = path.join(__dirname, "..", "public", "img");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname == "avatar") {
      const homeImg = path.join(imgPath, "avatar");
      callback(null, homeImg);
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

const multipleField = upload.fields([{ name: "avatar" }]);

router.get("/", verifyJWT, userRead);

router.get("/logout", verifyJWT, userLogout);

router.post("/login", userLogin);

router.post("/", userRegistration);

router
  .route("/User")
  .put(multipleField, updateUser)
  .post(multipleField, addUser);

router.delete("/User/:id", deleteUser);

router.get("/getUsers", getUsers);

router.get("/getCommercials", getCommercials);

module.exports = router;
