/**
 * Created by Aka on 5/7/16.
 */


app.controller('taskEditCtrl', function ($scope, getTaskById, $routeParams, TaskEditService, TaskAddService, $location) {
    
    var taskId = $routeParams.taskId;
    $scope.data = {};
    $scope.canComment = false;
    $scope.userRole = '';
    var author = localStorage.getItem('email');

    var self = this;

    this.statusOptions = {
        "type": "select",
        "values": [ "Not started", "In progress", "Testing", "Accepted", "Rejected", "Closed"]
    };

    getTaskById(taskId).then(function(response) {
        $scope.data = response.data;
        $scope.data.startDate = new Date(response.data.startDate);
        $scope.data.dueDate = new Date(response.data.dueDate);

        $scope.data.roles.map(function (value) {
            if(value.user == author) {
                $scope.userRole = value.role;
                if(value.role != 'Reviewer')
                    $scope.canComment = true;
            }
        });
    });


    $scope.update = function () {
        TaskEditService('/api/task/update', $scope.data).then(function () {
            $location.path('/');
            $scope.$apply();
        });
    };


    $scope.comment = '';
    $scope.addComment = function () {

        if($scope.comment.length < 3) return;
        TaskAddService('/api/task/addComment', {taskId : $scope.data._id, author : author, comment : $scope.comment})
            .then(function () {
                $scope.data.comments.push({author : author, comment : $scope.comment});
                $scope.comment = '';
                $scope.$apply();
            });

    };

    $scope.back = function () {
        $location.path('/');
    }
});
