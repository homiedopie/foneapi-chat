const mongoose  = require("mongoose");
const Schema  =  mongoose.Schema;

const ConversationSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    last_message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Conversation", ConversationSchema);