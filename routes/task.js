/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let express = require('express');
let taskRoutes = express.Router();
let Task = require('../controllers/taskController');

taskRoutes.post('/create', (req, res) => {

    let task = new Task(req.body);
    let result = task.create();

    result.then(data => res.json(data));

});


taskRoutes.post('/all', (req, res) => {
    
    res.end(); 
});

module.exports = taskRoutes;