const express = require('express');
const router = express.Router();
const { users, trakers, pages } = require('../database/models');
// const validator = require('validator')
// const bodyParser = require('body-parser')
// const session = require('../session/index.js')
// var jsonParser = bodyParser.json()

// router.use(session())

router.post('/', async (req, res) => {
  const { name, email, checked, phone } = await req.body;
  console.log(name);
  if (checked && name && email) {
    checked.map(async (track) => {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var isTraker = await trakers.findOne({
        where: {
          email: email,
          page: track,
        },
      });
      if (!isTraker) {
        trakers.create({
          name,
          email,
          page: track,
          phone,
          date,
          day,
          month,
          year,
        });
      }
    });
    res.json('Produit ajouté');
  }
});

module.exports = router;
