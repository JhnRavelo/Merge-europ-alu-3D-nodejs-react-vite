const { users, trakers, sessions } = require("../database/models");
const bcrypt = require("bcrypt");

const userRegistration = async (req, res) => {
  const { name, email, phone, password, typeUser } = await req.body;
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
  } else if (name && email && !userName && phone && password && typeUser) {
    const userRegister = await users.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      type: typeUser,
    });

    const id = userRegister.ID_user,
      role = userRegister.role,
      refreshToken = users.prototype.generateRefreshToken(id),
      accessToken = users.prototype.generateToken(id, role);

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    userRegister.refreshToken = refreshToken;

    const result = await userRegister.save();

    if (!result) return res.json("Utilisateur non enregistré");

    await sessions.create({ ID_session: id, day, month, year });

    res.cookie("jwt", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    res.json({ role, accessToken });
  } else {
    res.json("Suivant");
  }
};

const userLogin = async (req, res) => {
  const { loginMail, loginPassword } = await req.body;
  console.log(req.body);
  const cookie = req.cookies;

  const userName = await users.findOne({
    where: {
      email: loginMail,
    },
  });

  if (!userName) {
    return res.json(`Connexion invalide`);
  }

  const match = await bcrypt.compare(loginPassword, userName.password);

  if (!match) {
    return res.json("Connexion invalide");
  }
  const id = userName.ID_user;
  const role = userName.role;

  if (!role) res.sendStatus(401);

  let newRefreshToken = users.prototype.generateRefreshToken(id);
  const accessToken = users.prototype.generateToken(id, role);

  if (cookie?.jwt) {
    const refreshToken = cookie.jwt;
    const foundUser = await users.findOne({
      where: {
        refreshToken: refreshToken,
      },
    });

    if (!foundUser) {
      newRefreshToken = "";
    }

    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
  }

  userName.refreshToken = newRefreshToken;

  await userName.save();

  res.cookie("jwt", newRefreshToken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  await sessions.create({ ID_session: id, day, month, year });

  res.json({ role, accessToken });
};

const userRead = async (req, res) => {
  const cookie = await req.cookies;
  if (!cookie?.jwt) return res.sendStatus(401);
  const refreshToken = cookie.jwt;

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) return res.sendStatus(401);

  res.json({ name: user.name, email: user.email, phone: user.phone });
};

const userLogout = async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.jwt) return res.sendStatus(204);

  const refreshToken = cookie.jwt;
  console.log("object");
  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.sendStatus(204);
  }
  console.log("vider");
  user.refreshToken = "";
  await user.save();

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  return res.json("SUCCESS");
};

const addUser = async (req, res) => {
  const { name, email, phone, password, type } = await req.body;
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
    await users.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      type: type[0],
    });
    res.json(`Utilisateur ajouté`);
  }
};

const getUsers = async (req, res) => {
  const result = await users.findAll();

  res.json(result);
};

const updateUser = async (req, res) => {
  const { name, updateEmail, phone, updatePassword, type, id } = await req.body;
  console.log(updatePassword);
  if (updatePassword == "" && name && updateEmail && phone && type && id) {
    const user = await users.findOne({ where: { ID_user: id } });

    if (user) {
      user.set({ name, email: updateEmail, phone, type: type[0] });
      const result = await user.save();
      if (result) {
        const updateTraker = await trakers.findAll({
          where: {
            name: name,
          },
        });
        res.json("Utilisateur modifié");
      } else {
        res.json("Utilisateur non modifié");
      }
    } else {
      res.json("Utilisateur introuvable");
    }
  } else if (
    !updatePassword == "" &&
    name &&
    updateEmail &&
    phone &&
    type &&
    id
  ) {
    console.log("update");
    const user = await users.findOne({ where: { ID_user: id } });

    if (user) {
      user.set({
        name,
        email: updateEmail,
        phone,
        type: type[0],
        password: await bcrypt.hash(updatePassword, 10),
      });
      const result = await user.save();
      if (result) {
        res.json("Utilisateur modifié");
      } else {
        res.json("Utilisateur non modifié");
      }
    } else {
      res.json("Utilisateur introuvable");
    }
  }
};

const deleteUser = async (req, res) => {
  if (req?.params?.id) {
    const id = await req.params.id;
    const user = await users.findOne({
      where: {
        ID_user: id,
      },
    });
    const result = await user.destroy();
    if (result) return res.json("supprimé");
  } else res.json("non supprimé");
};

module.exports = {
  userRegistration,
  userLogin,
  userLogout,
  userRead,
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
