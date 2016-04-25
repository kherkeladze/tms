/**
 * Created by Aka on 4/24/16.
 */

app.factory('AuthService', function($http) {

    return function (url, data) {

        return new Promise(function (resolve) {

            $http({
                method : 'POST',
                url : url,
                data : data
            }).then(function (response) {
                resolve(response.data);
            });

        });

    };

});

app.factory('TaskAddService', function ($http) {

    return function (url, data) {

        return new Promise(function (resolve) {

            $http({
                method : 'POST',
                url : url,
                data : data
            }).then(function (response) {
                resolve(response.data);
            });

        });

    };

});



app.factory('TaskEditService', function ($http) {

    return function (url, data) {

        return new Promise(function (resolve) {

            $http({
                method : 'POST',
                url : url,
                data : data
            }).then(function (response) {
                resolve(response.data);
            });

        });

    };

});

app.factory('getTasksService', function ($http) {

    return function (url) {

        return new Promise(function (resolve) {

            $http({
                method : 'POST',
                url : url
            }).then(function (response) {
                resolve(response.data);
            });

        });
    };
});


app.factory('getUsersEmails', function ($http) {

    return function (url) {

        return new Promise(function (resolve) {

            $http({
                method : 'POST',
                url : url
            }).then(function (response) {
                resolve(response.data);
            });

        });
    };

});


