module.exports = (sequelize, DataTypes) => {
    const messages = sequelize.define("messages", {
      ID_message: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      text: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      img: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  
    messages.associate = (models) => {
      messages.belongsTo(models.users, {
        onDelete: "CASCADE",
        foreignKey: "sender",
      });
      messages.belongsTo(models.users, {
        onDelete: "CASCADE",
        foreignKey: "receiver",
      });
    };
  
    return messages;
  };
  