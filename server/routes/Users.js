const express = require('express');
const router = express.Router();
const { users } = require('../database/models');
const validator = require('validator');
const bodyParser = require('body-parser');
const session = require('../session/index.js');
const bcrypt = require('bcrypt');

var jsonParser = bodyParser.json();

router.use(session());

router.get('/', jsonParser, async (req, res) => {
  console.log(req.session);
  if (req.session.isAuth) {
    res.json(req.session.user);
  } else {
    res.json(false);
  }
});

router.get('/logout', jsonParser, async (req, res) => {
  if (req.session.isAuth) {
    req.session.destroy((err) => {
      if (err) res.json(err);
      else res.json('Logout');
    });
  }
});

// router.get('/users', jsonParser, async (req, res) => {
//   const findUsers = await users.findAll();
//   console.log(findUsers);
// });

router.post('/login', jsonParser, async (req, res) => {
  const { name, email } = await req.body;
  const userName = await users.findOne({
    where: {
      email: email,
      name: name,
    },
  });

  if (!userName) {
    return res.json('Pas le bon utilisateur');
  }

  req.session.isAuth = true;
  req.session.user = {
    name,
    email,
    phone: userName.phone,
  };
  res.json('');
});

router.post('/', jsonParser, async (req, res) => {
  const { name, email, phone, password } = await req.body;
  console.log(req.body);
  var userName;
  if (email) {
    userName = await users.findOne({
      where: {
        email: email,
      },
    });
  }

  if (userName) {
    res.json(`L'utilisateur existe déjà`);
  } else if (email && !validator.isEmail(email)) {
    res.json(`L'adresse email n'est pas valide`);
  } else if (phone && !validator.isMobilePhone(phone)) {
    res.json(`Le numéro de téléphone est invalide`);
  } else if (
    name &&
    email &&
    !userName &&
    phone &&
    validator.isEmail(email) &&
    validator.isMobilePhone(phone) &&
    password
  ) {
    bcrypt.hash(password, 10).then((hash) => {
      users.create({
        name,
        email,
        phone,
        password: hash,
      });
    });

    req.session.isAuth = true;
    req.session.user = {
      name,
      email,
      phone,
    };
    res.json('Votre compte a été créer');
  }else {
    res.json('Suivant')
  }
});

module.exports = router;
