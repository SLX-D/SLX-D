var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/loginapp', ['carts']);
var dbDonation = mongojs('mongodb://localhost/loginapp', ['donationInfo']);
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/loginapp',['slxd_cart']);

// Get All Items
router.get('/carts', function(req, res, next){
    db.carts.find(function(err,carts){
        console.log(carts);
        if(err){
            res.send(err);
        }
        res.json(carts);
    });
});

// Delete cart
router.delete('/carts/:id', function(req, res, next){
    db.carts.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, carts){
        if(err){
            res.send(err);
        }
        res.json(carts);
    });
});

//update cart
router.put('/carts/:id', function (req, res, next) {

    var carts = req.body;
    var updCart = {};
    
    if (carts.title) {
        updCart.title = carts.title;
    }
    if (carts.description) {
        updCart.description = carts.description;
    }
    if (carts.category) {
        updCart.category = carts.category;
    }
    if (carts.activeFlag) {
        updCart.activeFlag = carts.activeFlag;
    }
    if (carts.userName) {
        updCart.userName = carts.userName;
    }
       if (carts.contactNumber) {
        updCart.contactNumber = carts.contactNumber;
    }
       if (carts.address) {
        updCart.address = carts.address;
    }
      if (carts.emailId) {
        updCart.emailId = carts.emailId;
    }
    
    if (carts.donateflag) {
        updCart.donateflag = carts.donateflag;
    }
    if (!updCart) {
        res.status(400);
        res.json({
            "error": "Wrong Data"
        })
    } else {
        db.carts.update({ _id: mongojs.ObjectId(req.params.id) }, updCart, {}, function (err, carts) {
            if (err) {
                res.send(err);
            }
            res.json(carts);
        });

    }
}); 


//insert into donate
router.post('/donation', function(req, res, next){
    var donation = req.body;
    if(!donation.title ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        dbDonation.donationInfo.save(donation, function(err, donation){
            if(err){
                res.send(err);
            }
            res.json(donation);
        });
    }
});

//adding item to the cart
router.post('/addItem/carts', function(req, res, next){
    var cartsItem = req.body;
    if(!cartsItem.title){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.carts.save(cartsItem, function(err, cartsItem){
            if(err){
                res.send(err);
            }
            res.json(cartsItem);
        });
    }
});

module.exports = router;
