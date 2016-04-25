/**
 * Created by Aka on 4/24/16.
 */

app.controller('taskListCtrl', function (getTasksService, $scope, $uibModal) {

    var self = this;
    this.activeTasks = [];
    this.filterStatuses = ["All", "Not started", "In progress", "Testing", "Accepted", "Rejected", "Closed"];
    $scope.selectedFilter = "All";


    var tasks = getTasksService('/api/task/all');
    tasks.then(function (data) {
        self.activeTasks = data;
        $scope.$apply();
    });


    this.openModal = function (index) {
        console.log(self.activeTasks[index]);
        var modalInstance = $uibModal.open({
            animation: true,
            size : 'lg',
            templateUrl: 'myModalContent.html',
            controller : 'ModalDemoCtrl',
            resolve: {
                task : self.activeTasks[index]
            }
        });

    };

    this.openEditModal = function (index) {
        console.log(self.activeTasks[index]);
        var modalInstance = $uibModal.open({
            animation: true,
            size : 'lg',
            templateUrl: 'modalEdit.html',
            controller : 'ModalEditCtrl',
            resolve: {
                task : self.activeTasks[index]
            }
        });

    };

});


app.controller('ModalDemoCtrl', function ($scope, $uibModalInstance, task, TaskAddService) {
   
    $scope.task = task;
    $scope.userRole = '';
    $scope.canComment = false;

    var author = localStorage.getItem('email');

    $scope.task.roles.map(function (value) {
        if(value.user == author) {
            $scope.userRole = value.role;
            if(value.role != 'Reviewer')
                $scope.canComment = true;
        }
     });

    
   $scope.comment = '';
   $scope.addComment = function (taskId) {

       if($scope.comment.length < 3) return;
       TaskAddService('/api/task/addComment', {taskId : taskId, author : author, comment : $scope.comment})
           .then(function () {
               $scope.task.comments.push({author : author, comment : $scope.comment});
               $scope.comment = '';
               $scope.$apply();
           });

   }


});


app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});


app.controller('ModalEditCtrl', function ($scope, $uibModalInstance, task, TaskEditService) {
    
    $scope.task = task;

    $scope.statusOptions = {
        "type": "select",
        "values": [ "Not started", "In progress", "Testing", "Accepted", "Rejected", "Closed"]
    };


    $scope.updateTask = function () {
        TaskEditService('/api/task/update', $scope.task);
        $uibModalInstance.dismiss('cancel');
    };
});