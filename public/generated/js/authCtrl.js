app.controller("authCtrl",function($scope,$rootScope,$location,$cookies,AuthService){$scope.errors=[],$scope.regSuccess=!1,this.loginData={},this.registerData={};var self=this;this.tryLogin=function($valid){return $valid?void AuthService("/auth/login",this.loginData).then(function(token){$cookies.put("token",token),localStorage.setItem("email",self.loginData.email),$location.path("/"),$scope.$apply()},function(err){$scope.errors=[],$scope.errors.push(err),$scope.$apply()}):!1},this.tryRegister=function($valid){return $scope.regSuccess=!1,$valid?void AuthService("/auth/register",this.registerData).then(function(){$scope.errors=[],$scope.regSuccess="Registration completed! Please log in",localStorage.setItem("email",self.registerData.email),$scope.$apply()},function(errors){$scope.errors=[],$scope.errors=errors,$scope.$apply()}):!1}});