const { addUser } = require('./database/authHandler');
const { updateDatingProfile, addProfilePhoto, addUserTag, addTag } = require('./database/datingHandler');

const bcrypt = require('bcrypt');

const users = [
    {
        name: "Leanne Graham1",
        username: "Bret1",
        email: "test1@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham2",
        username: "Bret2",
        email: "test2@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham3",
        username: "Bret3",
        email: "test3@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham4",
        username: "Bret4",
        email: "test4@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham5",
        username: "Bret5",
        email: "test5@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham6",
        username: "Bret6",
        email: "test6@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham7",
        username: "Bret7",
        email: "test7@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham8",
        username: "Bret8",
        email: "test8@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham9",
        username: "Bret9",
        email: "test9@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham10",
        username: "Bret10",
        email: "test10@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham11",
        username: "Bret11",
        email: "test11@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham12",
        username: "Bret12",
        email: "test12@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham13",
        username: "Bret13",
        email: "test13@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham14",
        username: "Bret14",
        email: "test14@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham15",
        username: "Bret15",
        email: "test15@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham16",
        username: "Bret16",
        email: "test16@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham17",
        username: "Bret17",
        email: "test17@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham18",
        username: "Bret18",
        email: "test18@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham19",
        username: "Bret19",
        email: "test19@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham20",
        username: "Bret20",
        email: "test20@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham21",
        username: "Bret21",
        email: "test21@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham22",
        username: "Bret22",
        email: "test22@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham23",
        username: "Bret23",
        email: "test23@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham24",
        username: "Bret24",
        email: "test24@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham25",
        username: "Bret",
        email: "test25@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham26",
        username: "Bret26",
        email: "test26@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham27",
        username: "Bret27",
        email: "test27@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham28",
        username: "Bret28",
        email: "test28@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham29",
        username: "Bret29",
        email: "test29@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham30",
        username: "Bret30",
        email: "test30@gmail.com",
        password: "Password123"        
    },
    {
        name: "Leanne Graham31",
        username: "Bret31",
        email: "test31@gmail.com",
        password: "Password123"        
    },
    
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
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 16,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 17,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 18,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 19,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 20,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 21,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 22,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 23,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 24,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 25,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 26,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 27,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 28,
        gender: "Female"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 29,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 30,
        gender: "Male"
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 31,
        gender: "Female"
    },
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

const profilePhotos = [
    {
        userId: 1,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 1,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 1,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 1,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 1,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 2,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 2,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 2,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 3,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 4,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 4,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 4,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 4,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 5,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 5,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 5,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 5,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 5,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 6,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 6,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 7,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 7,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 7,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 8,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 8,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 8,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 8,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 9,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 9,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 10,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 11,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 11,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 11,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 11,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 11,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 12,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 12,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 13,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 13,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 13,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 14,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 14,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 15,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 15,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 15,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 16,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 17,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 17,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 17,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 18,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 18,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 18,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 18,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 19,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 20,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 20,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 20,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 20,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 20,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 21,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 21,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 21,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 22,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 22,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 23,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 23,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 23,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 24,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 25,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 25,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 25,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 25,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 25,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 26,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 26,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 27,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 27,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 28,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 28,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 28,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 29,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 29,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 30,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
    {
        userId: 30,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 30,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 30,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 31,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: false
    },
    {
        userId: 31,
        imageUrl: "https://picsum.photos/id/24/600/600",
        main: true
    },
]

const getRandomNumber = max => {
    return Math.floor(Math.random() * max);
}

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
            await addUser(user.name, user.username, user.email, hashedPassword, true);
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

    // console.log("[+] Updating Profile Photos.......");
    // await Promise.all(
    //     profilePhotos.map(async (photo) => {
    //         await addProfilePhoto(photo.userId, photo.imageUrl);
    //     })
    // );
    // console.log("[+] Profile Photos Updated");

    // console.log("[+] Assigning Tags......");

    // await Promise.all(
    //     datingProfiles.map(async (profile) => {
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
    //         await addUserTag(profile.userId, tags[getRandomNumber(tags.length)].tag);
            
    //     })
    // );

    console.log("[+] Tags Assigned");
    console.log("[+] Database Initialized");
        
}