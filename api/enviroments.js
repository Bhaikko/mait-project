module.exports.SESSION_SECRET_KEY = "FFFFFFF";
module.exports.TOKEN_SECRET_KEY = "FFFFFFF";

module.exports.DATABASE_NAME = "maitTalks";
module.exports.DATABASE_USERNAME = "maitTalksAdmin";
module.exports.DATABASE_PASSWORD = "123456";

const PORT = 4000;
module.exports.PORT = 4000;
module.exports.SERVER_URL = `http://127.0.0.1:${PORT}`;


const { EMAIL_ADDRESS, EMAIL_PASSWORD } = require('./credentials');
module.exports.EMAIL_ADDRESS = EMAIL_ADDRESS;
module.exports.EMAIL_PASSWORD = EMAIL_PASSWORD;