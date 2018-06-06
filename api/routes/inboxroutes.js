// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


// Model Import
const Inbox = require('../models/inboxmodel');

// Creates new Inbox
router.post('/create', (req, res, next) => {
    
    const newInbox = new Inbox({
        inboxid: new mongoose.Types.ObjectId(),
        userid: req.body.userid
    });
    
    newInbox.save()
    .then(result =>{
        res.status(201).json(result);
        console.log('new Inbox was created');
    })
    .catch(err => {
        res.status(500).json(err);
        console.log('Inbox creation failed');
    })

    
});

router.patch('/sendmessage', (req, res, next) => {
    
    const newMessage = {
        senderid: req.body.senderid,
        messagetext: req.body.messagetext,
    }
    
    
    
    Inbox.findOneAndUpdate({inboxid: req.body.inboxid}, {$push: {messages: newMessage}})
    .then(result => {
        res.status(200).json(result);
        console.log('message was send succesfully')
    })
    .catch(err => {
        res.status(500).json(err);
        console.log('message could not be send')
    })
})





module.exports = router;