const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../database/models');

handleRefreshToken = async (req, res) => {
  const cookie = req.cookie;
  if (!cookie?.jwt) return res.sendStatus(401);

  const refreshToken = cookie.jwt;

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || user.ID_user !== decoded.id) return res.sendStatus(403);

    const accessToken = users.generateToken(decoded.id);
  });
};

module.exports = {handleRefreshToken}