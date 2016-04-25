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
            .then(function (response) {

                if(response.status == 'success'){
                    $cookies.put('token', response.token);
                    localStorage.setItem('email', response.email);
                    $location.path('/');
                    $scope.$apply();
                }

                else {
                    $scope.errors = response.errors;
                    $scope.$apply();
                }

            });
    };

    this.tryRegister = function ($valid) {
        $scope.regSuccess = false;
        if(!$valid) return false;

        AuthService('/auth/register', this.registerData)
            .then(function(response) {

                if(response.status == 'success') {
                    $scope.regSuccess = "Registration completed! Please log in";
                    localStorage.setItem('email', self.registerData.email);
                    $scope.$apply();
                }

                else
                    $scope.errors = response.errors;
            });

    }

});