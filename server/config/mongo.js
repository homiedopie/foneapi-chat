module.exports = {
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USERNAME: process.env.MONGO_USERNAME || null,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || null,
    MONGO_DB: process.env.MONGO_DB || 'default',
}