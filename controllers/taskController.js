/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let taskModel = require('../models/task');
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
    
}


module.exports = TaskController;