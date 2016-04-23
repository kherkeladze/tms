/**
 * Created by Aka on 4/23/16.
 */

var app = angular.module('tms', ['ui.bootstrap','ngRoute']);


app.factory('$API', function($http) {

    return function (url, data) {

        return new Promise(function (resolve) {

            $http({
                method : "POST",
                url : url,
                data : data
            }).then(function (response) {
                resolve(response.data);
            });

        });

    };

});


app.controller('authCtrl', function ($API, $scope, $location) {

    $scope.errors = [];
    this.loginData = {};
    this.registerData = {};

    this.tryLogin = function ($valid) {


        if(!$valid) return false;

        $API('/auth/login', this.loginData)
            .then(function (response) {

                if(response.status == 'success')
                    $location.path('/');

                else {
                    $scope.errors = response.errors;
                    $scope.$apply();
                }

            });
    }

    this.tryRegister = function ($valid) {
        if(!$valid) return false;

        $API('/auth/register', this.registerData)
            .then(function(response) {
               $scope.errors = response.errors;
               $scope.$apply();
            });

    }

});


app.controller('dashBoardCtrl', function () {

});



app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/auth', {
            templateUrl : 'generated/pages/auth.html',
            controller : 'authCtrl'
        })
        .when('/', {
            templateUrl : 'generated/pages/dashboard.html',
            controller : 'dashBoardCtrl'
        })
});
