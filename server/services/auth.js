const User = require('./../models/User');

async function authenticate(email, password) {
    const user = await User.findOne({
        email
    }).select('+password');

    if (!user) {
        throw new Error("Invalid credentials");
    }

    if (!user.comparePassword(password)) {
        throw new Error("Invalid password");
    }

    return user;
}

module.exports = {
    authenticate
}