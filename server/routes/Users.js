const express = require('express');
const router = express.Router();
const { users } = require('../database/models');
// const bodyParser = require('body-parser');
// const session = require('../session/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
} = require('../controllers/userController');
const verifyJWT = require('../middlewares/verifyJWT');

// var jsonParser = bodyParser.json();

// router.use(session());

// router.get('/', async (req, res) => {
//   console.log(req.session);
//   if (req.session.isAuth) {
//     res.json(req.session.user);
//   } else {
//     res.json(false);
//   }
// });

// router.get('/logout', async (req, res) => {
//   if (req.session.isAuth) {
//     req.session.destroy((err) => {
//       if (err) res.json(err);
//       else res.json('Logout');
//     });
//   }
// });
router.get('/', verifyJWT, userRead)

router.get('/logout', verifyJWT, userLogout)

router.post('/login', userLogin);

router.post('/', userRegistration);

module.exports = router;
