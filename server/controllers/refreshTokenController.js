const jwt = require("jsonwebtoken");
require("dotenv").config();
const { users } = require("../database/models");

handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.jwt) return res.sendStatus(401);

  const refreshToken = cookie.jwt;

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  console.log(refreshToken);

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
        if (err) {
          return res.sendStatus(403);
        }
        const hackedUser = await users.findOne({
          where: {
            ID_user: decoded.id,
          },
        });
        // console.log("hacked");
        hackedUser.refreshToken = "";
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
        user.refreshToken = "";
        await user.save();
      }

      if (err || user.ID_user !== decoded.id) return res.sendStatus(403);

      const newRefreshToken = users.prototype.generateRefreshToken(decoded.id);
      const accessToken = users.prototype.generateToken(decoded.id);

      user.refreshToken = newRefreshToken;
      await user.save();

      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      console.log("here");
      res.json(accessToken);
    }
  );
};

module.exports = { handleRefreshToken };
