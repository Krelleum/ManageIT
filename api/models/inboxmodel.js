const mongoose = require('mongoose');

const inboxSchema = mongoose.Schema({
    inboxid: mongoose.Schema.Types.ObjectId,
    receiver: mongoose.Schema.Types.ObjectId,
    sender: mongoose.Schema.Types.ObjectId,
    message: {Type: String, timesended: { type: Date, default: Date.now }}
    
});

module.exports = mongoose.model('Inbox', inboxSchema);