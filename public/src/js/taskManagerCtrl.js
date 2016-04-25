/**
 * Created by Aka on 4/24/16.
 */

app.controller('taskManagerCtrl', function ($scope, TaskAddService, getUsersEmails) {

    var userEmail = localStorage.getItem('email');

    this.users = {};
    var self = this;

    getUsersEmails('/api/task/userEmails').then(function (result) {
          self.users = _.map(result, 'email');
          self.users.splice(self.users.indexOf(userEmail), 1);
          $scope.$apply();
    });


    this.taskModel = {
        status : "Not started",
        roles : [
            { user : userEmail, role : "Creator" }
        ]
    };

    this.createTask = function () {

        var result = TaskAddService('/api/task/create', this.taskModel);

        result.then(function (response) {
            console.log(response);
        });
    };

    this.statusOptions = {
        "type": "select",
        "values": [ "Not started", "In progress", "Testing", "Accepted", "Rejected", "Closed"]
    };

    
    this.userBlocks = [];

    this.addUserBlock = function () {
        this.userBlocks.push({});
    };

    this.removeUserBlock = function (index) {
        this.userBlocks.splice(index, 1);
        this.taskModel.roles.splice(index + 1, 1);
    };

});