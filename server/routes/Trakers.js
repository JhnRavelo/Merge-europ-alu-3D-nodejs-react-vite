const express = require('express');
const router = express.Router();
const { users, trakers, pages } = require('../database/models');
const { addTraker, getTraker } = require('../controllers/trakerController');
const verifyJWT = require('../middlewares/verifyJWT')

router.post('/', addTraker);

router.get('/', verifyJWT, getTraker)

module.exports = router;
