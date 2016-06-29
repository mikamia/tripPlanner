var express = require('express')
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;

router.get('/', function(req,res,next){

	var dbHotels = Hotel.findAll();
	var dbRestaurant = Restaurant.findAll();
	var dbActivity = Activity.findAll();

	Promise.all([dbHotels, dbRestaurant, dbActivity])
	.then(function(arr, err){
		if(err) console.error(err);
		res.render('index', {
			hotels: arr[0],
			restaurants: arr[1],
			activities: arr[2]}
		);

	});


})

module.exports = router;
