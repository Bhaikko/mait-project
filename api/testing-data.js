const { addUser } = require('./database/authHandler');
const { updateDatingProfile, addProfilePhoto, addUserTag } = require('./database/datingHandler');

const bcrypt = require('bcrypt');

const users = [
    {
        name: "Leanne Graham1",
        username: "Bret1",
        email: "test1@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham2",
        username: "Bret2",
        email: "test2@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham3",
        username: "Bret3",
        email: "test3@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham4",
        username: "Bret4",
        email: "test4@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham5",
        username: "Bret5",
        email: "test5@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham6",
        username: "Bret6",
        email: "test6@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham7",
        username: "Bret7",
        email: "test7@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham8",
        username: "Bret8",
        email: "test8@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham9",
        username: "Bret9",
        email: "test9@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham10",
        username: "Bret10",
        email: "test10@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham11",
        username: "Bret11",
        email: "test11@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham12",
        username: "Bret12",
        email: "test12@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham13",
        username: "Bret13",
        email: "test13@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham14",
        username: "Bret14",
        email: "test14@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham15",
        username: "Bret15",
        email: "test15@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham16",
        username: "Bret16",
        email: "test16@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham17",
        username: "Bret17",
        email: "test17@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham18",
        username: "Bret18",
        email: "test18@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham19",
        username: "Bret19",
        email: "test19@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham20",
        username: "Bret20",
        email: "test20@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham21",
        username: "Bret21",
        email: "test21@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham22",
        username: "Bret22",
        email: "test22@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham23",
        username: "Bret23",
        email: "test23@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham24",
        username: "Bret24",
        email: "test24@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham25",
        username: "Bret",
        email: "test25@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham26",
        username: "Bret26",
        email: "test26@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham27",
        username: "Bret27",
        email: "test27@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham28",
        username: "Bret28",
        email: "test28@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham29",
        username: "Bret29",
        email: "test29@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham30",
        username: "Bret30",
        email: "test30@gmail.com",
        password: "123456789"        
    },
    {
        name: "Leanne Graham31",
        username: "Bret31",
        email: "test31@gmail.com",
        password: "123456789"        
    },
    
]

const datingProfiles = [
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 1
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Taken",
        intrestedIn: "Women",
        age: 19,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 2
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 3
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Taken",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 4
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 5
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 6
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 7
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 8
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 9
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 10
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 11
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 12
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 13
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 14
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 15
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 16
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 17
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 18
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 19
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 20
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 21
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 22
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 23
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 24
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 25
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 26
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 27
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 28
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 29
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Women",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 30
    },
    {
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        relationshipStatus: "Single",
        intrestedIn: "Men",
        age: 18,
        collegeName: "Maharaja Agrasen Institute of Technology",
        userId: 31
    },
]

const profilePhotos = [
    {
        userId: 1,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 1,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 1,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 1,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 1,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 2,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 2,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 2,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 3,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 4,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 4,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 4,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 4,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 5,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 5,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 5,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 5,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 5,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 6,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 6,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 7,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 7,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 7,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 8,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 8,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 8,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 8,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 9,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 9,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 10,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 11,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 11,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 11,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 11,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 11,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 12,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 12,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 13,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 13,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 13,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 14,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 14,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 15,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 15,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 15,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 16,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 17,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 17,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 17,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 18,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 18,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 18,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 18,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 19,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 20,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 20,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 20,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 20,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 20,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 21,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 21,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 21,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 22,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 22,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 23,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 23,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 23,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 24,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 25,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 25,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 25,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 25,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 25,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 26,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 26,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 27,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 27,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 28,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 28,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 28,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 29,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 29,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 30,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 30,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 30,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 30,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 31,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
    {
        userId: 31,
        imageUrl: "https://via.placeholder.com/600/771796"
    },
]

const userTags = [
    {
        userId: 1,
        tag: "Tag 1"
    },
    {
        userId: 1,
        tag: "Tag 2"
    },
    {
        userId: 1,
        tag: "Tag 3"
    },
    {
        userId: 1,
        tag: "Tag 4"
    },
    {
        userId: 2,
        tag: "Tag 1"
    },
    {
        userId: 2,
        tag: "Tag 3"
    },
    {
        userId: 2,
        tag: "Tag 5"
    },
    {
        userId: 2,
        tag: "Tag 9"
    },
    {
        userId: 2,
        tag: "Tag 10"
    },
    {
        userId: 2,
        tag: "Tag 8"
    },
    {
        userId: 3,
        tag: "Tag 1"
    },
    {
        userId: 3,
        tag: "Tag 2"
    },
    {
        userId: 4,
        tag: "Tag 3"
    },
    {
        userId: 4,
        tag: "Tag 4"
    },
    {
        userId: 4,
        tag: "Tag 5"
    },
    {
        userId: 4,
        tag: "Tag 7"
    },
    {
        userId: 5,
        tag: "Tag 2"
    },
    {
        userId: 5,
        tag: "Tag 3"
    },
    {
        userId: 5,
        tag: "Tag 4"
    },
    {
        userId: 5,
        tag: "Tag 5"
    },
    {
        userId: 5,
        tag: "Tag 8"
    },
    {
        userId: 6,
        tag: "Tag 3"
    },
    {
        userId: 6,
        tag: "Tag 4"
    },
    {
        userId: 6,
        tag: "Tag 5"
    },
    {
        userId: 6,
        tag: "Tag 6"
    },
    {
        userId: 6,
        tag: "Tag 7"
    },
    {
        userId: 7,
        tag: "Tag 4"
    },
    {
        userId: 7,
        tag: "Tag 5"
    },
    {
        userId: 7,
        tag: "Tag 6"
    },
    {
        userId: 7,
        tag: "Tag 8"
    },
    {
        userId: 7,
        tag: "Tag 9"
    },
    {
        userId: 8,
        tag: "Tag 5"
    },
    {
        userId: 8,
        tag: "Tag 6"
    },
    {
        userId: 8,
        tag: "Tag 7"
    },
    {
        userId: 8,
        tag: "Tag 8"
    },
    {
        userId: 9,
        tag: "Tag 6"
    },
    {
        userId: 9,
        tag: "Tag 7"
    },
    {
        userId: 9,
        tag: "Tag 8"
    },
    {
        userId: 9,
        tag: "Tag 9"
    },
    {
        userId: 9,
        tag: "Tag 10"
    },
    {
        userId: 10,
        tag: "Tag 7"
    },
    {
        userId: 10,
        tag: "Tag 8"
    },
    {
        userId: 10,
        tag: "Tag 9"
    },
    {
        userId: 10,
        tag: "Tag 10"
    },
    {
        userId: 10,
        tag: "Tag 1"
    },
    {
        userId: 11,
        tag: "Tag 8"
    },
    {
        userId: 11,
        tag: "Tag 9"
    },
    {
        userId: 11,
        tag: "Tag 10"
    },
    {
        userId: 11,
        tag: "Tag 1"
    },
    {
        userId: 11,
        tag: "Tag 2"
    },
    {
        userId: 12,
        tag: "Tag 9"
    },
    {
        userId: 12,
        tag: "Tag 10"
    },
    {
        userId: 12,
        tag: "Tag 1"
    },
    {
        userId: 12,
        tag: "Tag 2"
    },
    {
        userId: 12,
        tag: "Tag 3"
    },
    {
        userId: 13,
        tag: "Tag 10"
    },
    {
        userId: 13,
        tag: "Tag 1"
    },
    {
        userId: 13,
        tag: "Tag 2"
    },
    {
        userId: 13,
        tag: "Tag 3"
    },
    {
        userId: 13,
        tag: "Tag 4"
    },
    {
        userId: 13,
        tag: "Tag 5"
    },
    {
        userId: 14,
        tag: "Tag 1"
    },
    {
        userId: 14,
        tag: "Tag 2"
    },
    {
        userId: 14,
        tag: "Tag 3"
    },
    {
        userId: 14,
        tag: "Tag 4"
    },
    {
        userId: 14,
        tag: "Tag 5"
    },
    {
        userId: 15,
        tag: "Tag 2"
    },
    {
        userId: 15,
        tag: "Tag 3"
    },
    {
        userId: 15,
        tag: "Tag 4"
    },
    {
        userId: 16,
        tag: "Tag 3"
    },
    {
        userId: 16,
        tag: "Tag 4"
    },
    {
        userId: 16,
        tag: "Tag 5"
    },
    {
        userId: 16,
        tag: "Tag 7"
    },
    {
        userId: 17,
        tag: "Tag 4"
    },
    {
        userId: 17,
        tag: "Tag 5"
    },
    {
        userId: 17,
        tag: "Tag 6"
    },
    {
        userId: 18,
        tag: "Tag 5"
    },
    {
        userId: 18,
        tag: "Tag 6"
    },
    {
        userId: 18,
        tag: "Tag 7"
    },
    {
        userId: 18,
        tag: "Tag 8"
    },
    {
        userId: 19,
        tag: "Tag 6"
    },
    {
        userId: 19,
        tag: "Tag 7"
    },
    {
        userId: 19,
        tag: "Tag 8"
    },
    {
        userId: 20,
        tag: "Tag 7"
    },
    {
        userId: 20,
        tag: "Tag 8"
    },
    {
        userId: 20,
        tag: "Tag 9"
    },
    {
        userId: 21,
        tag: "Tag 8"
    },
    {
        userId: 22,
        tag: "Tag 9"
    },
    {
        userId: 22,
        tag: "Tag 10"
    },
    {
        userId: 22,
        tag: "Tag 1"
    },
    {
        userId: 22,
        tag: "Tag 2"
    },
    {
        userId: 23,
        tag: "Tag 10"
    },
    {
        userId: 23,
        tag: "Tag 1"
    },
    {
        userId: 23,
        tag: "Tag 2"
    },
    {
        userId: 23,
        tag: "Tag 3"
    },
    {
        userId: 24,
        tag: "Tag 4"
    },
    {
        userId: 25,
        tag: "Tag 5"
    },
    {
        userId: 25,
        tag: "Tag 6"
    },
    {
        userId: 25,
        tag: "Tag 7"
    },
    {
        userId: 25,
        tag: "Tag 9"
    },
    {
        userId: 25,
        tag: "Tag 8"
    },
    {
        userId: 25,
        tag: "Tag 10"
    },
    {
        userId: 26,
        tag: "Tag 1"
    },
    {
        userId: 27,
        tag: "Tag 2"
    },
    {
        userId: 27,
        tag: "Tag 2"
    },
    {
        userId: 27,
        tag: "Tag 3"
    },
    {
        userId: 28,
        tag: "Tag 4"
    },
    {
        userId: 28,
        tag: "Tag 5"
    },
    {
        userId: 28,
        tag: "Tag 6"
    },
    {
        userId: 28,
        tag: "Tag 7"
    },
    {
        userId: 28,
        tag: "Tag 8"
    },
    {
        userId: 29,
        tag: "Tag 9"
    },
    {
        userId: 29,
        tag: "Tag 10"
    },
    {
        userId: 29,
        tag: "Tag 1"
    },
    {
        userId: 30,
        tag: "Tag 2"
    },
    {
        userId: 30,
        tag: "Tag 3"
    },
    {
        userId: 30,
        tag: "Tag 4"
    },
    {
        userId: 30,
        tag: "Tag 5"
    },
    {
        userId: 30,
        tag: "Tag 6"
    },
    {
        userId: 31,
        tag: "Tag 7"
    },
    {
        userId: 31,
        tag: "Tag 8"
    },
    {
        userId: 31,
        tag: "Tag 9"
    },
    {
        userId: 31,
        tag: "Tag 10"
    },
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


Promise.all(
    users.map(user => {
        return hashPassword(user.password)
            .then(password => addUser(user.name, user.username, user.email, password))
            .catch(err => { throw err });
    })
)
    .then(async () => {
        console.log("[+] Users added");

        await Promise.all(datingProfiles.map(profile => updateDatingProfile(profile.userId, profile.about, profile.relationshipStatus, profile.intrestedIn, profile.age)))
            .then(() => console.log("[+] Profile updated"))
            .catch(err => { throw err; });
        
        await Promise.all(profilePhotos.map(photo => addProfilePhoto(photo.userId, photo.imageUrl)))
            .then(() => console.log("[+] Profile Photos Added"))
            .catch(err => { throw err; });

        await Promise.all(userTags.map(tag => addUserTag(tag.userId, tag.tag)))
            .then(() => console.log("[+] User Tags Added"))
            .catch(err => { throw err; });

        console.log("[+] Test Data Initialised");
        console.log("[+] Please wait while the execution of this file terminates");
    })
    .catch(err => { throw err; });