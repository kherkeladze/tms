/**
 * Created by Aka on 4/25/16.
 */

'use strict';

let express = require('express');
let taskRoutes = express.Router();
let TaskController = require('../controllers/taskController');
let TokenController = require('../controllers/tokenController');


taskRoutes.post('/create', (req, res) => {
    
});

taskRoutes.post('/all', (req, res) => {
    
});

taskRoutes.post('/userEmails', (req, res) => {

});


taskRoutes.post('/addComment', (req, res) => {

});


taskRoutes.post('/update', (req, res) => {

});

module.exports = taskRoutes;