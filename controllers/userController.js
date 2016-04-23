/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let userModel = require('../models/user');
let response = require('./responseController');
let helpers = require('../helpers');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    register() {

        let newUser = new userModel(this.userData);
        
        return new Promise(resolve => {

            newUser.save(err => {
                if(err)
                    resolve(response.error(helpers.mongoosePrettyErrors(err)));
                else
                    resolve(response.success(newUser));
                
            });
            
        });

    }

    login() {

    }
}


module.exports = User;