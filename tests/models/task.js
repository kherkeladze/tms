/**
 * Created by Aka on 5/7/16.
 */

'use strict';

let chai = require('chai');
let faker = require('faker');
let expect = chai.expect;
let taskModel = require('../models/task');
let mongoose = require('mongoose');
let config = require('../appConfig');

let fakeTask = {

  title : faker.lorem.sentence(),
  description : faker.lorem.paragraph(),
  status : 'not started',
  roles : [],
  startDate : new Date()

};

mongoose.connect(config.TEST_DATABASE);


describe('method outputs', function () {

    it('should be return a promise', function () {
       expect(taskModel.create({})).to.be.a('promise');

    });

    it('should be return error', function () {
        return taskModel.create({}).catch(function (err) {
           expect(err).is.an('object');
        });
    });

    it('should be return a success', function () {
       taskModel.create(fakeTask).then(function (data) {
           expect(data).is.an('object');
       });
    });

});