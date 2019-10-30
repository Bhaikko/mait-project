const { Users } = require("./database");

const addUser = (name, email, password) => {
    return Users.create({
        name,
        email,
        password,
        isVerified: password 
    })
        .then(response => response)
        .catch(err => err.errors[0].message);    
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