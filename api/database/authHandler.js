const { Users, DatingProfiles } = require("./database");

module.exports.addUser = (name, username, email, password, verificationCode) => {
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
        isVerified: verificationCode
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

module.exports.getVerificationCode = id => {
    return Users.findOne({
        where: {
            id
        },
        attributes: ['isVerified']
    });
}

module.exports.getUser = email => {
    return Users.findOne({
        email 
    });
}

module.exports.checkVerification = id => {
    return Users.findOne({
        where: {
            id
        }
    });
}

module.exports.updateVerification = id => {
    return Users.update({
        isVerified: true
    }, {
        where: {
            id
        }
    });
}

module.exports.getUserByUserid = userId => {
    return Users.findOne({
        where: {
            id: userId
        }
    });
}

module.exports.getUseByEmailAndUsername = (email, username) => {
    return Users.findOne({
        where: {
            username,
            email
        }
    });
}