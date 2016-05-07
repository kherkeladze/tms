/**
 * Created by Aka on 5/5/2016.
 */

'use strict';

let userModel = require('../models/user');
let mongoosePrettyErrors = require('../helpers').mongoosePrettyErrors;
let token = require('../utils/token');

class User {

    register(userInfo) {
        return new Promise((resolve, reject) => {
            userModel.create(userInfo).then(data => resolve(data), err => reject(mongoosePrettyErrors(err)));
        });
    }

    login(credentials) {
        return new Promise((resolve, reject) => {
            userModel.find(credentials).then(email => resolve(token.create(email)), err => reject(err));
        });

    }

}


module.exports = new User();