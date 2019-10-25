const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { database } = require("./database/database");
const router = require("./api/index").router;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sessionMiddleware = session({
    secret: "FFFFFF",
    resave: false,
    saveUninitialized: true
});

app.use(sessionMiddleware);

app.use("/api", router);

const PORT = 4000;
database.sync()
    .then(() => app.listen(PORT, () => console.log(`Database Synced \nServer Up and Running on http://127.0.0.1:${PORT}`)))
    .catch(err => { throw err });