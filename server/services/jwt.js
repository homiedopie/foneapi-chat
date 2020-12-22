const jwt = require('jsonwebtoken');
const {
    APP_JWT_KEY,
    APP_JWT_EXPIRY
} = require('./../config/jwt')

async function createToken(payload) {
    const options = {
        expiresIn: APP_JWT_EXPIRY
    }

    return await jwt.sign(
        payload,
        APP_JWT_KEY,
        options
    );
}