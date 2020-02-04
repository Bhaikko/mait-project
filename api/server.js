const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { database } = require("./database/database");
const router = require("./api/index").router;
const { SESSION_SECRET_KEY, PORT, SERVER_URL } = require("./enviroments");
const { seedData } = require('./testing-data');
const { socket } = require('./socket');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

socket(io);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sessionMiddleware = session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
});

app.use(sessionMiddleware);

app.use("/api", router);
app.use("/uploads", express.static('./uploads'));

database.sync()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Database Synced \nServer Up and Running on ${SERVER_URL}`);
            // seedData(); // uncomment to seed data to database
        })
    })
    .catch(err => { throw err });


