/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let express = require('express');
let authRoutes = express.Router();
let User = require('../controllers/userController');

authRoutes.post('/register', (req, res) => {

    let user = new User(req.body);
    let result = user.register();

    result.then(data => res.json(data));


});

authRoutes.post('/login', (req, res) => {

    let result = User.login(req.body);
    
    result.then(token => {
        res.cookie('token', token);
        res.json({status : "success"});

    })
    .catch(data => {
            res.json(data);
    });
    
});

module.exports = authRoutes;