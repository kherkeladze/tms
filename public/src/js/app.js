/**
 * Created by Aka on 4/23/16.
 */

var app = angular.module('tms', ['ui.bootstrap','ngRoute']);

app.controller('authCtrl', function ($http) {

    this.errors = [];
    this.loginData = {};
    var self = this;

    this.tryLogin = function ($valid) {
        this.errors = [];

        if(!$valid) return false;

        $http({
          method : "POST",
          url : "/auth/login",
          data : this.loginData
        })
        .then(function(response) {
            if(response.data.status == 'error')
                self.errors = response.data.errors;
         });
    }

});



app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/auth', {
            templateUrl : 'generated/pages/auth.html',
            controller : 'authCtrl'
        })

});
