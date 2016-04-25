/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let jwt = require('jsonwebtoken');
let config = require('../appConfig');

class TokenController {

    static createToken(email) {
        return jwt.sign({ email : email }, config.JWT_SECRET, { expiresIn : "7 days" });
    }
    

    static getTokenItem(token, item){
         return jwt.verify(token, config.JWT_SECRET)[item];
    }
}

module.exports = TokenController;