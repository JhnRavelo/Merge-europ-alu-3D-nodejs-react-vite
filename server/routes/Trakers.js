const express = require("express");
const router = express.Router();
const { users, trakers, pages } = require("../database/models");
const {
  addTraker,
  getTraker,
  getTrakers,
} = require("../controllers/trakerController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyUserExist = require("../middlewares/verifyUserExist");
const verifyRole = require("../middlewares/verifyRole");

router.post("/", verifyUserExist, addTraker);

// router.use(verifyJWT);

router.get("/", getTraker);

router.get("/all", verifyRole(process.env.PRIME1), getTrakers);

module.exports = router;
