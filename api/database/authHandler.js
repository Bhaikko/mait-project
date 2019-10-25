const bcrypt = require("bcrypt");
const saltRounds = 10;

const { Users } = require("./database");

const addUser = (name, email, password) => {
    return bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            throw err;
        }
        Users.create({
            name,
            email,
            password: hash 
        })
            .then(response => response)
            .catch(err => { 
                throw err;
            });     
    });
}

const getUser = email => {
    return Users.findOne({
        email 
    })
        .then(user => user)
        .catch(err => { throw err });
}

module.exports = {
    getUser,
    addUser
}