/**
 * Created by Aka on 4/24/16.
 */

app.controller('taskListCtrl', function (getTasksService, $scope) {

    var self = this;
    this.activeTasks = [];
    this.filterStatuses = ["All", "Not started", "In progress", "Testing", "Accepted", "Rejected", "Closed"];
    $scope.selectedFilter = "All";

    var tasks = getTasksService('/api/task/all');
    tasks.then(function (data) {
        self.activeTasks = data;
        $scope.$apply();
    });

});