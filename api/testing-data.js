const { addUser } = require('./database/authHandler');
const { updateDatingProfile, addProfilePhoto, addUserTag, addTag } = require('./database/datingHandler');

const bcrypt = require('bcrypt');

const users = [
    {
        name: "Leanne Graham1",
        username: "Bret1",
        email: "test1@gmail.com",
        password: "Password123",
        enrollmentNumber: "00114802718",
    },
    {
        name: "Leanne Graham2",
        username: "Bret2",
        email: "test2@gmail.com",
        password: "Password123",
        enrollmentNumber: "00214802718"        
    },
    {
        name: "Leanne Graham3",
        username: "Bret3",
        email: "test3@gmail.com",
        password: "Password123",
        enrollmentNumber: "00314802718"        
    },
    {
        name: "Leanne Graham4",
        username: "Bret4",
        email: "test4@gmail.com",
        password: "Password123",
        enrollmentNumber: "00414802718"        
    },
    {
        name: "Leanne Graham5",
        username: "Bret5",
        email: "test5@gmail.com",
        password: "Password123",
        enrollmentNumber: "00514802718"        
    },
    {
        name: "Leanne Graham6",
        username: "Bret6",
        email: "test6@gmail.com",
        password: "Password123",
        enrollmentNumber: "00614802718"        
    },
    {
        name: "Leanne Graham7",
        username: "Bret7",
        email: "test7@gmail.com",
        password: "Password123",
        enrollmentNumber: "00714802718"        
    },
    {
        name: "Leanne Graham8",
        username: "Bret8",
        email: "test8@gmail.com",
        password: "Password123",
        enrollmentNumber: "00814802718"        
    },
    {
        name: "Leanne Graham9",
        username: "Bret9",
        email: "test9@gmail.com",
        password: "Password123",
        enrollmentNumber: "00914802718"        
    },
    {
        name: "Leanne Graham10",
        username: "Bret10",
        email: "test10@gmail.com",
        password: "Password123",
        enrollmentNumber: "01014802718"        
    },
    {
        name: "Leanne Graham11",
        username: "Bret11",
        email: "test11@gmail.com",
        password: "Password123",
        enrollmentNumber: "01114802718"        
    },
    {
        name: "Leanne Graham12",
        username: "Bret12",
        email: "test12@gmail.com",
        password: "Password123",
        enrollmentNumber: "01214802718"        
    },
    {
        name: "Leanne Graham13",
        username: "Bret13",
        email: "test13@gmail.com",
        password: "Password123",
        enrollmentNumber: "01314802718"        
    },
    {
        name: "Leanne Graham14",
        username: "Bret14",
        email: "test14@gmail.com",
        password: "Password123",
        enrollmentNumber: "01414802718"        
    },
    {
        name: "Leanne Graham15",
        username: "Bret15",
        email: "test15@gmail.com",
        password: "Password123",
        enrollmentNumber: "01514802718"        
    }    
]

const datingProfiles = [
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 1,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Taken",
        intrestedIn: "Women",
        age: 19,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 2,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 3,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Taken",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 4,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 5,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 6,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 7,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 8,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 9,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 10,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 11,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 12,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 13,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 14,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 15,
        gender: "Male"
    }
]

const tags = [
    {
        tag: "sitcoms"
    },
    {
        tag: "tv shows"
    },
    {
        tag: "hollywood"
    },
    {
        tag: "bollywood"
    },
    {
        tag: "feminism"
    },
    {
        tag: "left wing"
    },
    {
        tag: "foodie"
    },
    {
        tag: "geek"
    },
    {
        tag: "nerd"
    },
    {
        tag: "travel"
    },
    {
        tag: "adventure"
    },
    {
        tag: "sports"
    },
    {
        tag: "coding"
    },
    {
        tag: "electronics"
    },
    {
        tag: "cars"
    },
    {
        tag: "robotics"
    },
    {
        tag: "fashion"
    },
    {
        tag: "make up"
    },
    {
        tag: "introvert"
    },
    {
        tag: "extrovert"
    },
    {
        tag: "ambivert"
    },
    {
        tag: "reader"
    },
    {
        tag: "gamer"
    },
    {
        tag: "memes"
    },
    {
        tag: "active drinker"
    },
    {
        tag: "ocassional drinker"
    },
    {
        tag: "active smoker"
    },
    {
        tag: "tea over coffee"
    },
    {
        tag: "coffee over tea"
    },
    {
        tag: "dance"
    },
    {
        tag: "music"
    },
    {
        tag: "dogs"
    },
    {
        tag: "birds"
    },
    {
        tag: "cats"
    },
    {
        tag: "nature"
    },
    {
        tag: "home"
    },
    {
        tag: "hostel life"
    },
    {
        tag: "front bencher"
    },
    {
        tag: "back bencher"
    },
    {
        tag: "organised"
    },
    {
        tag: "messy"
    },
    {
        tag: "morning person"
    },
    {
        tag: "casual"
    },
    {
        tag: "gym"
    },
    {
        tag: "tik tok"
    },
    {
        tag: "anime"
    },
    {
        tag: "photography"
    },
    {
        tag: "reading"
    }
]

const hashPassword = password => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function(err, password) {
            if (err) {
                reject(err);
            }
            resolve(password);
        });
    });
}

module.exports.seedData = async () => {

    console.log("[+] Initializing Database......");
    const hashedPassword = await hashPassword("Password123");

    console.log("[+] Adding Users......");
    await Promise.all(
        users.map(async (user) => {
            await addUser(user.name, user.username, user.email, hashedPassword, true, user.enrollmentNumber);
        })
    );
    console.log("[+] Users Added");

    console.log("[+] Adding Tags......");
    await Promise.all(
        tags.map(async (tag) => {
            await addTag(tag.tag);
        })
    );
    console.log("[+] Tags Added");

    console.log("[+] Updating Dating Profiles......");
    await Promise.all(
        datingProfiles.map(async (profile) => {
            await updateDatingProfile(profile.userId, profile.about, profile.relationshipStatus, profile.intrestedIn, profile.age, profile.collegeName, profile.gender);
        })
    );
    console.log("[+] Dating Profiles Updated");

    console.log("[+] Tags Assigned");
    console.log("[+] Database Initialized");
        
}