const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    ID_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  users.prototype.generateToken = function (id) {
    const accessToken = jwt.sign(
      {
        "id": id
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30s',
      }
    );
    return accessToken
  };

  users.prototype.generateRefreshToken = function (id) {
    const refreshToken = jwt.sign(
      {
        "id":id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '300s',
      }
    );
    
    return refreshToken
  }

  return users;
};
