const mongoose  = require("mongoose");
const Schema  =  mongoose.Schema;
const FriendStatus = require('./../config/friend-status');

const ContactSchema = new Schema({
    status: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    friends: [{
        contact: {
            type: Schema.Types.ObjectId,
            ref: 'Contact'
        },
        status: {
            type: String,
            enum: [
                FriendStatus.Accepted,
                FriendStatus.Blocked,
                FriendStatus.Pending,
                FriendStatus.Declined,
                FriendStatus.Requested
            ],
            default: null
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", ContactSchema);