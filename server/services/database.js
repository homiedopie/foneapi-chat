const mongoose = require('mongoose')
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = require('../config/mongo')

const debug = require('./logger')('database');

// TODO: Put in config
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
};


function Database () {
    this.db = mongoose

    this.db.connection.on('error', err => {
        if (err) {
            debug(`MongoDB Error: [${err.name}] ${err.message}`);
        }
    });

    this.db.connection.on('disconnected', () => {
        debug(`DB Disconnected`);
    });

    this.db.connection.on('connected', () => {
        debug('DB Connected');
    });

    this.db.connection.on('connecting', () => {
        debug('DB Connecting');
    });
}

Database.prototype.init = async function () {
    let url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
    if (MONGO_PASSWORD != null && MONGO_USERNAME != null) {
        url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
    }

    await this.db.connect(url, options)
}


module.exports = new Database()