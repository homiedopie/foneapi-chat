const expressJwt = require('express-jwt')
const {
    APP_JWT_KEY
} = require('./../config/jwt')

module.exports = expressJwt({
    secret: APP_JWT_KEY,
    algorithms: ['HS256']
})