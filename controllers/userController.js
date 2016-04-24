/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let userModel = require('../models/user');
let response = require('./responseController');
let helpers = require('../helpers');
let messages = require('../lang/messages');
let tokenController = require('../controllers/tokenController');

class User {

    constructor(userData) {
        this.userData = userData;
    }

    register() {

        let newUser = new userModel(this.userData);
        
        return new Promise(resolve => {

            newUser.save(err => {

                if(err) resolve(response.error(helpers.mongoosePrettyErrors(err)));

                resolve(response.success(newUser));
                
            });
            
        });

    }

    static login(credentials) {

        return new Promise((resolve, reject) => {

            userModel.findOne({ email : credentials.email }, (err, user) => {

                if(err) return resolve(response.error(err));

                if(!user) return reject(response.error([messages.USER_NOT_FOUND]));

                if(user.comparePassword(credentials.password))

                    resolve(tokenController.createToken(credentials.email));

                else
                    reject(response.error([messages.WRONG_PASSWORD]));
            });

        });

    }

    static checkAuth(token) {
        return tokenController.isValidToken(token);
    }
}


module.exports = User;