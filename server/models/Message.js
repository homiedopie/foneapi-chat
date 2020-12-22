const mongoose  = require("mongoose");
const Schema  =  mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        type: String
    },
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Message", MessageSchema);