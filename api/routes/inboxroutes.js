// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


// Model Import
const Inbox = require('../models/inboxmodel');


router.post('/create', (req, res, next) => {
    
    const newInbox = new Inbox({
        inboxid: new mongoose.Types.ObjectId(),
    })
    
    newInbox.save()
    .then(result =>{
        res.status(201).json(result);
        console.log('new Inbox was created');
    })
    .catch(err => {
        res.status(500).json(err);
        console.log('Inbox creation failed');
    })

    
})


module.exports = router;