module.exports = (sequelize, DataTypes) => {
    const gallery = sequelize.define('galleries', {
        ID_gallery:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        gallery:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        src:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
    return gallery
}