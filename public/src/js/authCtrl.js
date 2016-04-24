/**
 * Created by Aka on 4/24/16.
 */

app.controller('authCtrl', function ($scope, $rootScope, $location, $cookies, AuthService) {


    $scope.errors = [];
    this.loginData = {};
    this.registerData = {};

    this.tryLogin = function ($valid) {


        if(!$valid) return false;

        AuthService('/auth/login', this.loginData)
            .then(function (response) {

                if(response.status == 'success'){
                    $cookies.put('token', response.token);
                }

                else {
                    $scope.errors = response.errors;
                    $scope.$apply();
                }

            });
    };

    this.tryRegister = function ($valid) {
        if(!$valid) return false;

        AuthService('/auth/register', this.registerData)
            .then(function(response) {
                $scope.errors = response.errors;
                $scope.$apply();
            });

    }

});