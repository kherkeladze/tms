/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({

    title : { type : String, trim : true, required : true },
    description : { type : String, trim : true, required : true },
    status : { type : String, required : true },
    roles : { type : Array, required : true },
    startDate : { type : Date, required : true },
    dueDate : { type : Date, required : true },
    updatedAt : { type : Date },
    comments : { type : Array }

});


module.exports = mongoose.model('Task', taskSchema);
