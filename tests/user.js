/**
 * Created by Aka on 5/5/2016.
 */

'use strict';

let chai = require('chai');
let faker = require('faker');
let expect = chai.expect;
let userModel = require('../models/user');
let mongoose = require('mongoose');
let config = require('../appConfig');

mongoose.connect(config.TEST_DATABASE);

let fakeUser = {

  firstName : faker.name.firstName(),
  lastName : faker.name.lastName(),
  email : faker.internet.email(),
  password : 123

};

describe('method outputs', function () {

     it('create method output should be a promise', function () {
         expect(userModel.create({})).to.be.a('promise');
     });

    it('find method output should be a promise', function () {
        expect(userModel.find({})).to.be.a('promise');
    });

    it('getUsersEmails method output should be a promise', function () {
        expect(userModel.getUsersEmails()).to.be.a('promise');
    });
});

describe('method output results', function () {

    it('promise should be rejected with error', function () {
        userModel.create({}).catch(function (err) {
            expect(err).to.be.an('object');
        });
    });

    it('promise should be resolved with success', function () {

        return userModel.create(fakeUser).then(function(data) {
           expect(data).to.be.an('object');
        });

    });
});