module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    ID_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    png: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pub:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    gallery:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return products;
};
