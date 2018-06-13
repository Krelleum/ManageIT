const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Comment = require('../models/commentmodel');


// create Comment


router.post('/createcomment', (req, res, next) => {
    const newComment = new Comment({
        commentid: new mongoose.Types.ObjectId(),
        customerid: req.body.customerid,
        userid: req.body.userid,
        orderid: req.body.orderid,
        commenttext: req.body.commenttext,
        customername: req.body.customername,

    })

    newComment.save()
        .then(result => {
            res.status(201).json(result);
            console.log('new Comment was succesfully created')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
});


// get Comment with orderid

router.get('/getcommentbyorderid/:orderid', (req, res, next) => {
    Comment.find({orderid: req.params.orderid})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})




module.exports = router;