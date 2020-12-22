module.exports = {
    CLIENT_PROTOCOL: process.env.CLIENT_PROTOCOL || 'http',
    CLIENT_HOST: process.env.CLIENT_HOST || 'localhost',
    CLIENT_PORT: process.env.CLIENT_PORT || process.env.PORT || '3000',
}