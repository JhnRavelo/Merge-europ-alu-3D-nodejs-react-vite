const express = require('express');
const router = express.Router();
const { users } = require('../database/models');
const bodyParser = require('body-parser');
const session = require('../session/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

router.post('/login', jsonParser, async (req, res) => {
  const { email, password } = await req.body;
  const userName = await users.findOne({
    where: {
      email: email,
    },
  });

  const match = await bcrypt.compare(password, userName.password);

  if (!userName) {
    return res.json(`L'utilisateur n'existe pas `);
  } else if (match) {
    return res.json(`Vous êtes connecté`);
  } else if (!match) {
    return res.json('Mot de passe invalide');
  }

  // req.session.isAuth = true;
  // req.session.user = {
  //   name,
  //   email,
  //   phone: userName.phone,
  // };
  // res.json('');
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
  } else if (name && email && !userName && phone && password) {
    bcrypt.hash(password, 10).then((hash) => {
      users.create({
        name,
        email,
        phone,
        password: hash,
      });
    });

    const accessToken = jwt.sign(
      {
        userName: name,
        userEmail: email,
        userPhone: phone,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '600s',
      }
    );

    const refreshToken = jwt.sign(
      {
        userName: name,
        userEmail: email,
        userPhone: phone,
      },
      process.env.ACCESS_REFRESH_TOKEN,
      {
        expiresIn: '1d',
      }
    );
    req.session.isAuth = true;
    req.session.user = {
      name,
      email,
      phone,
    };
    res.json('Votre compte a été créer');
  } else {
    res.json('Suivant');
  }
});

module.exports = router;
