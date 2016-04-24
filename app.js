/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let config = require('./appConfig');
let authRoutes = require('./routes/auth');
let taskRoutes = require('./routes/task');
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let path = require('path');

let app = express();
mongoose.connect(`mongodb://localhost/${config.DATABASE}`);
mongoose.set('debug', true);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/api/task', taskRoutes);


app.get('*', (req, res) => {
    res.sendFile(`${path.join(__dirname)}/public/generated/index.html`);
});



app.listen(process.env.PORT || config.SERVER_PORT);