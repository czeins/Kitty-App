// IIFE   

(function(){

	angular
		.module('KittyApp')
		.controller('KittyController', KittyController);

	function KittyController() {

		var self = this;


// Array of Cats



	self.adoptees = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]

	}

	function genderCheck(cat) {
		console.log("hello!");
		return (cat.gender === 'boy') ? "h3boy" : "h3girl";
	}


})();