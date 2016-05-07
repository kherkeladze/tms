/**
 * Created by Aka on 5/7/16.
 */

'use strict';

let jwt = require('jsonwebtoken');
let config = require('../appConfig');

class TokenController {

    static create(email) {
        return jwt.sign({ email : email }, config.JWT_SECRET, { expiresIn : "7 days" });
    }

    static getItem(token, item){
        return jwt.verify(token, config.JWT_SECRET)[item];
    }

}

module.exports = TokenController;