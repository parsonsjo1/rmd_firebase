angular.
  module('rmd').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/hello', {
          template: '<hello></hello>'
        }).
        when('/search', {
          template: '<search></search>'
        }).
        otherwise('/hello');
      }
    ]);