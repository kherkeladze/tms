/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let jwt = require('jsonwebtoken');
let config = require('../appConfig');

class TokenController {

    static createToken(email) {
        return jwt.sign({ email : email }, config.JWT_SECRET, { expiresIn : 5000 });
    }

    static isValidToken(token) {

        try {
            jwt.verify(token, config.JWT_SECRET);
            return true;
        }

        catch(err) {
            return false;
        }

    }
    
}

module.exports = TokenController;