// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Model Import
const User = require('../models/usermodel');



// Create new User

router.post('/create', (req, res, next) => {
    
    
    User.findOne({username: req.body.username})
    .exec()
    .then(user =>{
        if(user){
            return res.status(409).json({message: 'Error - Username Already Exists'})
        }
        else{
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
        }
    }).catch(err => {
        res.status(500).json(err);
    })
        
   
});


// Login 

router.post('/login' (req, res, next => {

    User.findOne({username: req.body.username})
    .exec()
    .then(user => {
        if(user && user.password === req.body.password){
            return res.status(200).json({message: 'Login Authorized'});
        }
        else{
            res.status(401).json({message: 'Unauthorized'});
        }
    }).catch(err => {
        res.status(500).json(err);
    })
}));


// Add Created Order

router.patch('/createdorders' (req, res, next => {
    User.findOneAndUpdate({userid: req.body.userid}, {$push: {createdorders: req.body.createdorder}})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}));

// Add Fulfilled Order

router.patch('/fulfilledorders' (req, res, next => {
    User.findOneAndUpdate({userid: req.body.userid}, {$push: {fulfilledorders: req.body.fulfilledorder}})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
}));

// Add Commented Order

router.patch('/commentedorders' (req, res, next => {
    User.findOneAndUpdate({userid: req.body.userid}, {$push: {commentedorders: req.body.commentedorder}})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}))







module.exports = router;