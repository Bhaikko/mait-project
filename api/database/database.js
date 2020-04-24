const Sequelize = require("sequelize");
const redis = require('redis').createClient();

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, MODE } = require("../enviroments");

let database = {};

if (process.env.MODE === "Production") {
    database = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: "localhost",
        dialect: "mysql",
        logging: false 
    });
} else {
    database = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite',
        logging: false
    });
}

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
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Member",
        validate: {
            isIn: [["Member", "VIP", "Moderator", "Admin"]]
        }
    },
    enrollment: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Enrollment Number Already Exists."
        }
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
            isIn: [['Single', 'Taken']]
        }
    },
    intrestedIn: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Women",
        validate: {
            isIn: [['Men', 'Women']]
        }
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 18,
        validate: {
            min: {
                args: 18,
                msg: "Minimum Age Should Be 18"
            }
        }
    },
    collegeName: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Male"
    },
    lastSeen: {
        type: Sequelize.STRING
    }
});

DatingProfiles.belongsTo(Users);
Users.hasOne(DatingProfiles);

const ProfilePhotos = database.define("profilePhotos", {
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    main: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
        type: Sequelize.DATE,
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
    likerId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likeeId: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Tags = database.define("tags", {
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Reports = database.define("reports", {
    report: {
        type: Sequelize.TEXT,
        allowNull: false 
    },
    submittedById: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reportForId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Contacts = database.define("contacts", {
    userId1: {
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    userId2: {
        type: Sequelize.INTEGER,
        allowNull: false 
    }
});

const Notifications = database.define("notifications", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    time: {
        type: Sequelize.DATE
    }
});

Notifications.belongsTo(Users);
Users.hasMany(Notifications);



module.exports = {
    database,
    redis,
    Users,
    DatingProfiles,
    ProfilePhotos,
    UserTags,
    Messages,
    Matches,
    Tags,
    Reports,
    Contacts,
    Notifications
}