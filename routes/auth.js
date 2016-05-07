/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let express = require('express');
let authRoutes = express.Router();
let user = require('../services/user');
let response = require('../utils/response');

authRoutes.post('/register', (req, res) => {
    user.register(req.body).then(data => response.success(res, data), err => response.error(res, err));
});

authRoutes.post('/login', (req, res) => {
    user.login(req.body).then(token => response.success(res, token), err => response.error(res, err));
});


module.exports = authRoutes;