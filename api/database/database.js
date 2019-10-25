const Sequelize = require("sequelize");

const database = new Sequelize("maitTalks", "maitTalksAdmin", "123456", {
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
        unique: true
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