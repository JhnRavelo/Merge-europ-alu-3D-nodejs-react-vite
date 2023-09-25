const express = require("express");
const router = express.Router();
const { users } = require("../database/models");
// const session = require('../session/index.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
  addUser,
  getUsers,
} = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyRole = require("../middlewares/verifyRole");

router.get("/", verifyJWT, userRead);

router.get("/logout", verifyJWT, userLogout);

router.post("/login", userLogin);

router.post("/", userRegistration);

router.post("/addUser", addUser)

router.get("/getUsers", getUsers)

module.exports = router;
