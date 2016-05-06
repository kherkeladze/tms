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

    }

    static editTask(modifiedTask) {

    }

    static findTasks(email) {
    }
    
    static findEmails() {
    }

    static addComment(data) {

 
    }

}

module.exports = TaskController;