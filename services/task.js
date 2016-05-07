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
    
    getUserTasks(req) {

        let email = token.getItem(req.cookies.token,'email');

        return new Promise((resolve, reject) => {
           taskModel.findTasks(email).then(tasks => resolve(tasks), err => reject(err));
        });

    }
}

module.exports = new Task();