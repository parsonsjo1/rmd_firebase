// Get a reference to the database service
  var database = firebase.database();


var rmdModule = angular.module('rmd',['ngRoute']);

rmdModule.component('home', {
	templateUrl: 'home/home.template.html',
	controller: function() {
		this.message = 'Welcome to the Homepage';
	}
});

rmdModule.component('demo', {
	templateUrl: 'demo/demo.template.html',
	controller: function() {
		
	}
});

rmdModule.component('rent', {
	templateUrl: '/rent/rent.template.html',
	controller: function() {
		this.name = 'Rent';
	}
});

rmdModule.component('reserve', {
	templateUrl: '/reserve/reserve.template.html',
	controller: function() {
		this.name = 'Reserve';
	}
});