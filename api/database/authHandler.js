const { Users, DatingProfiles } = require("./database");

const addUser = (name, username, email, password) => {
    username = username.trim();
    username = username.toLowerCase();
    username = username.split(" ");
    username = username.join("");

    email = email.trim();
    email = email.split(" ");
    email = email.join("");

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
            });
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