angular.module("rmd").config(["$locationProvider","$routeProvider",function(e,l){e.hashPrefix("!"),l.when("/hello",{template:"<hello></hello>"}).when("/search",{template:"<search></search>"}).otherwise("/hello")}]);