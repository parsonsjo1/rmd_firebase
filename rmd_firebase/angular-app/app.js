// Get a reference to the database service
  var database = firebase.database();


var rmdModule = angular.module('rmd',['ngRoute']);

rmdModule.component('hello', {
	template: '<div>' +
			  'Hello {{$ctrl.name}}' +
			  '</div>',
	controller: function() {
		this.name = 'Josh';
	}
});

rmdModule.component('search', {
	templateUrl: './tests/hello.template.html',
	controller: function() {
		this.name = 'Josh';
	}
});