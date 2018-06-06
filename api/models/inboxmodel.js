const mongoose = require('mongoose');

const inboxSchema = mongoose.Schema({
    inboxid: mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId,
    messages: {type: Array, timesended: { type: Date, default: Date.now }, senderid: {type: mongoose.Schema.Types.ObjectId}, messagetext: {type: String}}
    
});

module.exports = mongoose.model('Inbox', inboxSchema);