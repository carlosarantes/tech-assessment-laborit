const authConfig = require("../config/auth.json");
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
    return jwt.sign(payload, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    generateToken
}