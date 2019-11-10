const { Users } = require("./database");

const addUser = (name, username, email, password) => {
    return Users.create({
        name,
        email,
        password,
        username
        // isVerified: password 
    })
        .then(response => response)
        .catch(err => { throw err });    
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