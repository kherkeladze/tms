app.controller("authCtrl",function($scope,$rootScope,$location,$cookies,AuthService){$scope.errors=[],this.loginData={},this.registerData={},this.tryLogin=function($valid){return $valid?void AuthService("/auth/login",this.loginData).then(function(response){"success"==response.status?$cookies.put("token",response.token):($scope.errors=response.errors,$scope.$apply())}):!1},this.tryRegister=function($valid){return $valid?void AuthService("/auth/register",this.registerData).then(function(response){$scope.errors=response.errors,$scope.$apply()}):!1}});