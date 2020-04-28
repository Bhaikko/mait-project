const { Users, DatingProfiles, ProfilePhotos, UserTags, Contacts, Reports, Messages } = require("./database");

module.exports.addUser = (name, username, email, password, verificationCode, enrollment) => {
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
        isVerified: verificationCode,
        enrollment
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

module.exports.deleteUser = async (userId) => {
    await DatingProfiles.destroy({
        where: {
            userId
        }
    });

    await ProfilePhotos.destroy({
        where: {
            userId
        }
    });

    await UserTags.destroy({
        where: {
            userId
        }
    });

    await Reports.destroy({
        where: {
            reportForId: userId
        }
    });

    await Messages.destroy({
        where: {
            senderId: userId
        }  
    });

    await Messages.destroy({
        where: {
            recieverId: userId
        }
    })

    await Contacts.destroy({
        where: {
            userId2: userId
        }
    });

    await Contacts.destroy({
        where: {
            userId2: userId
        }
    });

    await Users.destroy({
        where: {
            id: userId
        }
    });

    return "Done";


}