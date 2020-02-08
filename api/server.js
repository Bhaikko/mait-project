const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { database, redis } = require("./database/database");
const router = require("./api/index").router;
const { SESSION_SECRET_KEY, PORT, SERVER_URL } = require("./enviroments");
const { seedData } = require('./testing-data');
const { socket } = require('./socket');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

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
        console.log('Mysql database Up and running!!!');
        redis.select(1, () => {
            console.log('Redis Database Up!!!');
            server.listen(PORT, () => {
                console.log(`Server Up and Running on ${SERVER_URL}`);
                socket(io, redis);

                // seedData(); // uncomment to seed data to database
            });
        });

        redis.on('error', err => {
            console.log(err);
        });
    })
    .catch(err => { throw err });


