module.exports = (sequelize, DataTypes) => {
    const homes = sequelize.define('homes', {
        ID_home:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        page:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        img:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        src:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return homes
}