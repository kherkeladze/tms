/**
 * Created by Aka on 4/24/16.
 */

app.controller('taskManagerCtrl', function () {

    this.taskModel = {};

    this.createTask = function () {

    };

    this.userBlocks = [];

    this.addUserBlock = function () {
        this.userBlocks.push({});
    }

    this.removeUserBlock = function (index) {
        this.userBlocks.splice(index, 1);
    }

});