/**
 * Created by Aka on 5/7/16.
 */

'use strict';

let chai = require('chai');
let faker = require('faker');
let expect = chai.expect;
let request = require('request');
let fakeEmail = faker.internet.email();


describe('user authentication routes', function () {

    it('registration should be return error', function (done) {

        request.post('http://localhost:8000/auth/register', function (err, res, body){
            expect(res.statusCode).equals(400);
            expect(body).to.be.a('string');
            done();
        });

    });

    it('registration should complete successfully', function (done) {

        let demoUser = {

            firstName : 'demo',
            lastName : 'demo',
            email : fakeEmail,
            password : 'demo'
        };

        var options = {
            url: 'http://localhost:8000/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            json: demoUser
        };

        request.post(options, function (err, res, body) {
            console.log(res.statusCode, body);
            done();
        });

    });

});