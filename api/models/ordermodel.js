const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderid: mongoose.Schema.Types.ObjectId,
    customerid: mongoose.Schema.Types.ObjectId,
    ordertype: String,
    orderheading: String,
    ordershort: String,
    orderdescription: String,
    ordernotes: String,
    orderpriority: String,
    commentid: mongoose.Schema.Types.ObjectId,
    timecreated: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Order', orderSchema);