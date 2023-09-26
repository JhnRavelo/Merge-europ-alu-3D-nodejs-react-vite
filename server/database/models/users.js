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
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "/avatar/User-avatar.png",
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
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: process.env.USER
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Particulier"
    }
  });

  users.prototype.generateToken = function (id, role) {
    const accessToken = jwt.sign(
      {"userInfo":{
        "id": id,
        "role":role,
      }
        
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '60s',
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
        expiresIn: '1d',
      }
    );
    
    return refreshToken
  }

  return users;
};
