app.factory("AuthService",function($http){return function(url,data){return new Promise(function(resolve){$http({method:"POST",url:url,data:data}).then(function(response){resolve(response.data)})})}});