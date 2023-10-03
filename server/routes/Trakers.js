const express = require('express');
const router = express.Router();
const { users, trakers, pages } = require('../database/models');
const { addTraker, getTraker, getTrakers } = require('../controllers/trakerController');
const verifyJWT = require('../middlewares/verifyJWT');
const verifyUserExist = require('../middlewares/verifyUserExist');

router.post('/',  verifyUserExist, addTraker);

router.get('/', verifyJWT, getTraker)

router.get('/all', getTrakers)

module.exports = router;
