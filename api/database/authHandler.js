const { Users, DatingProfiles } = require("./database");

module.exports.addUser = (name, username, email, password) => {
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
        isVerified: true // this is for development build only
    })
        .then(response => {
            return DatingProfiles.create({
                userId: response.id 
            });
        })
        .catch(err => { throw err });    
}

module.exports.updatePassword = (id, password) => {
    return Users.update(
        {
            password 
        },
        {
            where: {
                id 
            }
        }
    );
}

module.exports.getPasswordHash = id => {
    return Users.findOne({
        where: {
            id
        },
        attributes: ['password']
    });
}

module.exports.getUser = email => {
    return Users.findOne({
        email 
    });
}
