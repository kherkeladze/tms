/**
 * Created by Aka on 5/7/16.
 */

'use strict';

let taskModel = require('../models/task');
let token = require('../utils/token');

class Task {

    create(taskData) {
        return new Promise((resolve, reject) => {
            taskModel.addNew(taskData).then(task => resolve(task), err => reject(err));
        });     
    }
    
    getUserTasks(userToken) {

        let email = token.getItem(userToken,'email');
        return new Promise((resolve, reject) => {
           taskModel.findTasks(email).then(tasks => resolve(tasks), err => reject(err));
        });

    }

    findTaskById(taskId) {
        return new Promise((resolve, reject) => {
            taskModel.findTask(taskId).then(task => resolve(task), err => reject(err));
        });
    }

    update(task) {
        return taskModel.updateTask(task);
    }

    addComment(data) {
        return taskModel.addComment(data);
    }
}

module.exports = new Task();