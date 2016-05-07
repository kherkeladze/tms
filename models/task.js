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


taskSchema.statics.addNew = function (taskData) {

    let task = new this(taskData);

    return new Promise((resolve, reject) => {
        task.save((err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });

};


taskSchema.statics.update = function (task) {

    this.update({ _id: task._id }, task, { multi: false }, function(err) {
        if(err) { throw err; }
    });

};

taskSchema.statics.findTasks = function(email) {

    let task = this;
    return new Promise((resolve, reject) => {
        task.find({}).where('roles.user').equals(email).exec((err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });

};


taskSchema.statics.addComment = function (data) {

    this.findById(data.taskId, (err, task) => {
        task.comments.push({ author : data.author, comment : data.comment });
        task.save();
    });

};

module.exports = mongoose.model('Task', taskSchema);