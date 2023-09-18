const express = require('express');
const router = express.Router();
const { users } = require('../database/models');
// const session = require('../session/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
  userCookie
} = require('../controllers/userController');
const verifyJWT = require('../middlewares/verifyJWT');

router.get('/', verifyJWT, userRead)

router.get('/logout', verifyJWT, userLogout)

router.post('/login', userLogin);

router.post('/', userRegistration);

router.post('/cookie', userCookie)

module.exports = router;
