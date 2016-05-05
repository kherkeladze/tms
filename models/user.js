/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');
let Schema = mongoose.Schema;

let userSchema = new Schema({

    firstName : { type : String, trim : true, required : true, minlength : 2, maxlength : 12 },
    lastName : { type : String, trim : true, required : true, minlength : 2, maxlength : 15 },
    email : { type: String, trim : true, required : true, unique : true },
    password : { type : String, required : true }

});

userSchema.pre('save', function(next) {

    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, (err, hash) => {

        if(err) next(err);

        user.password = hash;
        next();
    });


});


userSchema.methods.comparePassword = function(password) {

    return bcrypt.compareSync(password, this.password);

};


userSchema.statics.create = function(userData) {
//todo refactor this

    let self = this;
    return new Promise((resolve, reject) => {
        self.create(userData, function (err, data) {
            if(err) return reject(err);
            resolve(data);
        });
        
    });  
};

userSchema.statics.find = function(credentials) {

    return new Promise((resolve, reject) => {

        this.findOne({ email : credentials.email }, (err, user) => {

            if(err) return reject(err);
            if(!user) return reject('no user');

            if(user.comparePassword(credentials.password))
                resolve(credentials.email);

            else
                reject('error wrong pass');
        });

    });

};

userSchema.statics.getUsersEmails = function () {

    let user = this;
    return new Promise((resolve, reject) => {
        user.find({}).select('email -_id').exec((err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
};

module.exports = mongoose.model('User', userSchema);
