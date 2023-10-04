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
  validationLogin,
  validationRegister,
} = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyRole = require("../middlewares/verifyRole");
const multer = require("multer");
const path = require("path");

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

router.post("/validationLogin", validationLogin)

router.post("/validationRegister", validationRegister)

router.post("/login", userLogin);

router.post("/", userRegistration);

// router.use(verifyJWT);

router.get("/", verifyJWT, userRead);

router.get("/logout", verifyJWT, userLogout);

// router.use(verifyRole(process.env.PRIME1));

router
  .route("/User")
  .put(verifyJWT, verifyRole(process.env.PRIME1), updateUser)
  .post(verifyJWT, verifyRole(process.env.PRIME1), addUser);

router.delete("/User/:id", verifyJWT, verifyRole(process.env.PRIME1), deleteUser);

router.get("/getUsers", verifyJWT, verifyRole(process.env.PRIME1), getUsers);

router.get("/getCommercials", verifyJWT, verifyRole(process.env.PRIME1), getCommercials);

module.exports = router;
