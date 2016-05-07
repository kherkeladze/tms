/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let express = require('express');
let taskRoutes = express.Router();
let task = require('../services/task');
let response = require('../utils/response');


taskRoutes.post('/create', (req, res) => {
    task.create(req.body).then(task => response.success(res, task), err => response.error(res, task));
});

taskRoutes.post('/all', (req, res) => {
    task.getUserTasks(req).then(tasks => response.success(res, tasks), err => response.error(res, err));
});

taskRoutes.post('/userEmails', (req, res) => {

});


taskRoutes.post('/addComment', (req, res) => {

});


taskRoutes.post('/update', (req, res) => {

});

module.exports = taskRoutes;