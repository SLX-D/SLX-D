var express = require('express');
var router = express.Router();

// Get Homepage
// router.get('/', ensureAuthenticated, function(req, res){
// 	res.render('index');
// });
router.get('/', function(req, res){
	res.render('index.html');	
});
// // //397948
// router.get('/donate', ensureAuthenticated, function(req, res){
// 	res.render('donate');
// });

// router.get('/cart', ensureAuthenticated, function(req, res){
// 	res.render('cart');
// });


// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 		// res.redirect('/');
// 	}
// }

module.exports = router;