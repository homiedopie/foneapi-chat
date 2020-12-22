const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const hasher = {
    hash: async (value) => {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        return bcrypt.hash(value, salt);
    },
    compare: async (value, encrypted) => {
        return await bcrypt.compare(value, encrypted);
    }
}

module.exports = hasher