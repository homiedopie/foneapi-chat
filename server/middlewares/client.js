const {
    CLIENT_PROTOCOL,
    CLIENT_HOST,
    CLIENT_PORT
} = require('./../config/client')

module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `${CLIENT_PROTOCOL}://${CLIENT_HOST}:${CLIENT_PORT}`);
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
}