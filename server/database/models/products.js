module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    ID_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    page: {
      type: DataTypes.STRING,
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
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
      //   get() {
      //     return this.getDataValue("gallery").split(";");
      //   },
      //   set(val) {
      //     this.setDataValue("gallery", val.join(";"));
      //   },
    },
  });
  return products;
};
