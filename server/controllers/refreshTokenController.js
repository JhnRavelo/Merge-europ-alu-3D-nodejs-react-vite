const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../database/models');

handleRefreshToken = async (req, res) => {
  const cookie = req.cookie;
  if (!cookie?.jwt) return res.sendStatus(401);

  const refreshToken = cookie.jwt;
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });

  const user = await users.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.sendStatus(403);
        const hackedUser = users.findOne({
          where: {
            ID_user: decoded.id,
          },
        });
        hackedUser.refreshToken = '';
        await hackedUser.save();
      }
    );
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        user.refreshToken = '';
        await user.save();
      }

      if (err || user.ID_user !== decoded.id) return res.sendStatus(403);

      const newRefreshToken = users.prototype.generateRefreshToken(decoded.id);
      const accessToken = users.prototype.generateToken(decoded.id);

      user.refreshToken = newRefreshToken;
      await user.save();

      res.cookie('jwt', newRefreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json(accessToken);
    }
  );
};

module.exports = { handleRefreshToken };
