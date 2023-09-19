module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define("pages", {
    ID_page: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    page: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minYAngle: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxYAngle: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    minXAngle: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    minXAngle: {
        type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return pages;
};
