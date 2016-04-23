/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({

    title : { type : String, trim : true, required : true },
    description : { type : String, trim : true, required : true },
    status : { type : Number, default : 0 },
    assignments : { type : Array },
    createdAt : { type : Date, required : true },
    updatedAt : { type : Date, required : true },
    comments : { type : Array }

});

module.exports = mongoose.model('Task', taskSchema);
