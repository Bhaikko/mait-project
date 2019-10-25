const Sequelize = require("sequelize");

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = require("./../constants");

const database = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    logging: false 
});

const Users = database.define("users", {
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Email Already Exist"
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false 
    }
});

module.exports = {
    database,
    Users 
}