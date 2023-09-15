const { users } = require('../database/models');
const bcrypt = require('bcrypt');

const userRegistration = async (req, res) => {
  const { name, email, phone, password } = await req.body;
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
    let userRegister;

      userRegister = await users.create({
        name,
        email,
        phone,
        password: await bcrypt.hash(password, 10),
      });

      const refreshToken = users.prototype.generateRefreshToken(
        userRegister.ID_user
      );

      const accessToken = users.prototype.generateToken(userRegister.ID_user);

      // console.log(accessToken);

      userRegister.refreshToken = refreshToken;

      await userRegister.save();

      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        // sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({"token":accessToken})

    // req.session.isAuth = true;
    // req.session.user = {
    //   name,
    //   email,
    //   phone,
    // };
    // res.json('Votre compte a été créer');
  } 
  // else {
  //   res.json('Suivant');
  // }
};

const userLogin = async (req, res) => {
  const { email, password } = await req.body;
  const cookie = req.cookie;
  // console.log(cookie);

  if (cookie?.jwt) {
    res.clearCookie('jwt', { httpOnly: true, 
      // sameSite: 'none', 
      secure: true });
  }

  const userName = await users.findOne({
    where: {
      email: email,
    },
  });

  // console.log(userName);
  if (!userName) {
    return res.json(`Connexion invalide`);
  }

  const match = await bcrypt.compare(password, userName.password);

  if (!match) {
    return res.json('Connexion invalide');
  }

  const refreshToken = users.prototype.generateRefreshToken(userName.ID_user);
  const accessToken = users.prototype.generateToken(userName.ID_user);

  userName.refreshToken = refreshToken;

  await userName.save();

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    // sameSite: 'none',
    // secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json(accessToken);

  // req.session.isAuth = true;
  // req.session.user = {
  //   name,
  //   email,
  //   phone: userName.phone,
  // };
  // res.json('');
};

const userRead = async (req, res) => {
const cookie = req.cookies
console.log(req.user);
if (!cookie?.jwt) return res.sendStatus(401);
const refreshToken = cookie.jwt

const user = await users.findOne({
  where: {
    refreshToken: refreshToken,
  },
})

if(!user) return res.sendStatus(401)

res.json({"name":user.name, "email":user.email, "phone":user.phone})

}

const userLogout = async (req, res) => {

  const cookie = req.cookies;

  if (!cookie?.jwt) return res.sendStatus(204);

  const refreshToken = cookie.jwt;

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) {
    res.clearCookie('jwt', { 
      httpOnly: true, 
      // sameSite: 'none', 
      // secure: true 
    });
    return res.sendStatus(204);
  }

  user.refreshToken = '';
  await user.save();

  res.clearCookie('jwt', { 
    httpOnly: true, 
    // sameSite: 'none', 
    // secure: true 
  });

  return res.json('SUCCESS')
};

module.exports = {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
};
