module.exports = (sequelize, DataTypes) => {
    const galleries = sequelize.define('galleries', {
        ID_gallery:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        src:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
    return galleries
}