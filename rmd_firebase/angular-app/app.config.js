angular.
  module('rmd').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/demo', {
          template: '<demo></demo>'
        }).        
        when('/rent', {
          template: '<rent></rent>'
        }).
        when('/reserve', {
          template: '<rent></rent>'
        }).
        otherwise('/home');
      }
    ]);