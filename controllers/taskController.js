/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let taskModel = require('../models/task');
let userModel = require('../models/user');
let response = require('./responseController');
let helpers = require('../helpers');

class TaskController {

    constructor(taskData) {
        this.taskData = taskData;
    }

    create() {

        let newTask = new taskModel(this.taskData);

        return new Promise(resolve => {
            newTask.save(err => {
                if(err) resolve(response.error(helpers.mongoosePrettyErrors(err)));
                resolve(response.success(newTask));
            });
        });

    }

    static editTask(modifiedTask) {

        taskModel.update({ _id: modifiedTask._id }, modifiedTask, { multi: false }, function(err) {
            if(err) { throw err; }
        });
    }


    static findTasks(email) {
        return taskModel.findUserTasks(email);
    }
    
    static findEmails() {
        return userModel.getUsersEmails();
    }

    static addComment(data) {

        taskModel.findById(data.taskId, (err, task) => {
            task.comments.push({ author : data.author, comment : data.comment });
            task.save();
        });
    }

}

module.exports = TaskController;