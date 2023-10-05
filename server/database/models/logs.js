module.exports = (sequelize, DataTypes) => {
    const logs = sequelize.define('logs', {
        ID_Log:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        event:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        unRead:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        model:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return logs
}