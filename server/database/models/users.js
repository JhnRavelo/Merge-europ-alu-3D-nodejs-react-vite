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
  });

  users.prototype.generateToken = function (id) {
    const accessToken = jwt.sign(
      {
        id: id.toString()
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '600s',
      }
    );
    return accessToken
  };

  return users;
};
