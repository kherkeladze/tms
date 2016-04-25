/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let express = require('express');
let taskRoutes = express.Router();
let TaskController = require('../controllers/taskController');
let TokenController = require('../controllers/tokenController');

taskRoutes.post('/create', (req, res) => {

    let task = new TaskController(req.body);
    let result = task.create();
    result.then(data => res.json(data));

});

taskRoutes.post('/all', (req, res) => {

    let email = TokenController.getTokenItem(req.cookies.token,'email');
    let result = TaskController.findTasks(email);
    result.then(data => res.json(data));

});

taskRoutes.post('/userEmails', (req, res) => {
    let result = TaskController.findEmails();
    result.then(data => res.json(data));
});


taskRoutes.post('/addComment', (req, res) => {
   TaskController.addComment(req.body);
   res.json({status : "success"});
});


taskRoutes.post('/update', (req, res) => {
    TaskController.editTask(req.body);
    res.json({status : "success"});
});

module.exports = taskRoutes;