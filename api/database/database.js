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
    username: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: "Username Already Exists"
        },
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Email Already Exists"
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    isVerified: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const DatingProfiles = database.define("datingProfiles", {
    about: {
        type: Sequelize.TEXT
    },
    relationshipStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Single",
        validate: {
            isIn: [['Single', 'Taken']],
        }
    },
    intrestedIn: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Men"
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 18,
        validate: {
            min: 16
        }
    },
    collegeName: {
        type: Sequelize.STRING
    }
});

DatingProfiles.belongsTo(Users);
Users.hasOne(DatingProfiles);

const ProfilePhotos = database.define("profilePhotos", {
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

ProfilePhotos.belongsTo(Users);
Users.hasMany(ProfilePhotos);

const UserTags = database.define("userTags", {
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

UserTags.belongsTo(Users);
Users.hasMany(UserTags);

const Messages = database.define("messages", {
    senderId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    recieverId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    seen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});


const Matches = database.define("matches", {
    userId1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId2: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = {
    database,
    Users,
    DatingProfiles,
    ProfilePhotos,
    UserTags,
    Messages,
    Matches
}