const { users } = require('../database/models');

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
    bcrypt.hash(password, 10).then(async (hash) => {
      userRegister = await users.create({
        name,
        email,
        phone,
        password: hash,
      });
    });

    const refreshToken = users.prototype.generateRefreshToken(
      userRegister.ID_user
    );
    const accessToken = users.prototype.generateToken(userRegister.ID_user);

    userRegister.refreshToken = refreshToken;

    userRegister.save();

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    // req.session.isAuth = true;
    // req.session.user = {
    //   name,
    //   email,
    //   phone,
    // };
    res.json('Votre compte a été créer');
  } else {
    res.json('Suivant');
  }
};

const userLogin = async (req, res) => {
  const { email, password } = await req.body;
  const userName = await users.findOne({
    where: {
      email: email,
    },
  });

  const match = await bcrypt.compare(password, userName.password);

  if (!userName) {
    return res.json(`Connexion invalide`);
  } else if (match) {
    return res.json(`Vous êtes connecté`);
  } else if (!match) {
    return res.json('Connexion invalide');
  }

  // req.session.isAuth = true;
  // req.session.user = {
  //   name,
  //   email,
  //   phone: userName.phone,
  // };
  // res.json('');
};

const userLogout = async (req, res) => {
  const cookie = req.cookie;
  if (!cookie?.jwt) return res.sendStatus(204);

  const refreshToken = cookie.jwt;

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
    return res.sendStatus(204);
  }

  user.refreshToken = '';
  await user.save();

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
};

module.exports = {
  userRegistration,
  userLogin,
};
