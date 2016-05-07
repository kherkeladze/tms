/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let express = require('express');
let taskRoutes = express.Router();
let task = require('../services/task');
let user = require('../services/user');
let response = require('../utils/response');


taskRoutes.post('/create', (req, res) => {
    task.create(req.body).then(task => response.success(res, task), err => response.error(res, task));
});

taskRoutes.post('/all', (req, res) => {
    task.getUserTasks(req.cookies.token).then(tasks => response.success(res, tasks), err => response.error(res, err));
});


taskRoutes.get('/findTask/:taskId', (req, res) => {
    task.findTaskById(req.params.taskId).then(task => response.success(res, task) , err => response.error(res, err));
});


taskRoutes.post('/addComment', (req, res) => {
    task.addComment(req.body); response.success(res, {});
});


taskRoutes.post('/update', (req, res) => {
    task.update(req.body); response.success(res, {});
});

taskRoutes.post('/userEmails', (req, res) => {
    user.getEmails().then(emails => response.success(res, emails), err => response.error(res, err));
});

module.exports = taskRoutes;