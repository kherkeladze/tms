/**
 * Created by Aka on 5/5/2016.
 */

'use strict';

let userModel = require('../models/user');
let mongoosePrettyErrors = require('../helpers').mongoosePrettyErrors;

class User {

    register(userInfo) {
        return new Promise((resolve, reject) => {
            userModel.create(userInfo).then(data => resolve(data), err => reject(mongoosePrettyErrors(err))); 
        });
    }

    login() {
        
    }

}


module.exports = new User();