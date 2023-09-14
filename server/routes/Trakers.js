const express = require('express');
const router = express.Router();
const { users, trakers, pages } = require('../database/models');
const { addTraker } = require('../controllers/trakerController');

// const validator = require('validator')
// const bodyParser = require('body-parser')
// const session = require('../session/index.js')
// var jsonParser = bodyParser.json()

// router.use(session())

router.post('/', addTraker);

module.exports = router;
