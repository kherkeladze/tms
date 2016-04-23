/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({

    firstName : { type : String, trim : true, required : true, minlength : 2, maxlength : 12 },
    lastName : { type : String, trim : true, required : true, minlength : 2, maxlength : 15 },
    email : { type: String, trim : true, required : true, unique : true },
    password : { type : String, required : true }

});

module.exports = mongoose.model('User', userSchema);
