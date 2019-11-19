const { Users, DatingProfiles } = require("./database");

const addUser = (name, username, email, password) => {
    return Users.create({
        name,
        email,
        password,
        username,
        isVerified: true 
    })
        .then(response => {
            return DatingProfiles.create({
                userId: response.id 
            })
                // .then(response => response);
        })
        .catch(err => { throw err });    
}

const getUser = email => {
    return Users.findOne({
        email 
    });
}

module.exports = {
    getUser,
    addUser
}