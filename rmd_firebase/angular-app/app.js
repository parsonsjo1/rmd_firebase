var rmdModule = angular.module('rmd',[]);

rmdModule.component('hello', {
	template: '<div>' +
			  'Hello {{$ctrl.name}}' +
			  '</div>',
	controller: function() {
		this.name = 'Josh';
	}
});