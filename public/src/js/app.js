/**
 * Created by Aka on 4/23/16.
 */

var app = angular.module('tms', ['ui.bootstrap', 'ngRoute', 'ngCookies']);


app.run(function ($cookies, $location) {
    if(!$cookies.get('token'))
        $location.path('/auth');
});

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/auth', {
            templateUrl : 'generated/pages/auth.html',
            controller : 'authCtrl'
        })
        .when('/', {
           templateUrl: 'generated/pages/dashboard.html',
           controller: 'dashboardCtrl'
        });
});