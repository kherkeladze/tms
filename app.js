/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let config = require('./appConfig');
let authRoutes = require('./routes/auth');
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');


let app = express();
mongoose.connect(`mongodb://localhost/${config.DATABASE}`);
mongoose.set('debug', true);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRoutes);




app.listen(config.SERVER_PORT);