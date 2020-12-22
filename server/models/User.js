const mongoose  = require("mongoose");
const Schema  =  mongoose.Schema;
const Role = require('./../config/role');
const { compare, hash } = require('../services/hasher');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [Role.User, Role.Admin],
        default: Role.User
    }
}, {
    timestamps: true
});

UserSchema.pre('findOneAndUpdate', async function () {
    this.setOptions({
        runValidators: true, // Run schema validators
        new: true // Return modified object
    });

    if (this._update && this._update.newPassword) {
        this._update.password = await hash(this._update.newPassword);
    }
});
  
UserSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            this.password = await hash(this.password);
        }
        return next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = async function (password) {
    try {
        return await compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

module.exports = mongoose.model("User", UserSchema);