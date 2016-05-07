/**
 * Created by Aka on 4/24/16.
 */

app.controller('authCtrl', function ($scope, $rootScope, $location, $cookies, AuthService) {

    $scope.errors = [];
    $scope.regSuccess = false;
    this.loginData = {};
    this.registerData = {};
    var self = this;
    this.tryLogin = function ($valid) {


        if(!$valid) return false;

        AuthService('/auth/login', this.loginData)
            .then(

             function (token) {
                 $cookies.put('token', token);
                 localStorage.setItem('email', self.loginData.email);
                 $location.path('/');
                 $scope.$apply();
            },

            function(err) {
                $scope.errors = [];
                $scope.errors.push(err);
                $scope.$apply();
            }
        );
    };

    this.tryRegister = function ($valid) {
        $scope.regSuccess = false;
        if(!$valid) return false;

        AuthService('/auth/register', this.registerData)
            .then(function() {
                 $scope.errors = [];
                 $scope.regSuccess = "Registration completed! Please log in";
                localStorage.setItem('email', self.registerData.email);
                $scope.$apply();
            },
            function(errors) {
                $scope.errors = [];
                $scope.errors = errors;
                $scope.$apply();
            }
         );

    }

});