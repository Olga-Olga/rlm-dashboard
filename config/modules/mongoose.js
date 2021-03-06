'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rlmDashboard');

var db = mongoose.connection;

db.on('error', log.error.bind(console, 'Connection to mongoDb error'));
db.once('open', function callback() {
    log.info('Connection to mongoDb established.');
});

module.exports = mongoose;