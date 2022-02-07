const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const User = sequelize.define("UserAccount", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.CHAR(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    gender: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    }
});

module.exports = User;
