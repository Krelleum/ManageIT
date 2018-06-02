const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customerid: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: {type: String, required: true},
    street: String,
    building: String,
    room: String,
    phone: String,
    customeremail: String,
    openorders: Array,
    closedorder: Array,
    usercontact: Array,
    timecreated: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Customer', customerSchema);