// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Model Import
const User = require('../models/usermodel');



// Create new User

router.post('/', (req, res, next) => {
    const newUser = new User({
        userid: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        useremail: req.body.useremail,
        userphone: req.body.userphone,
        
    });

    newUser.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

















module.exports = router;