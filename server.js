'use strict';

//logging
global.log = require('./config/modules/winston');

//reading config file
var cfg = require('./config/config')();
cfg.rootDir = __dirname + '/';

//mongo
require('./config/modules/mongoose');
var statusSync = require('./src/statusSync')(cfg);
var User = require('./src/models/User');

//passport
require('./config/modules/passport')(User);

//express
var express = require('express');
var app = express();

//routes
var routes = require('./src/routes')(cfg, statusSync);

//setup express usages
require('./config/modules/express')(app, cfg, routes);

//start server
app.listen(cfg.port, cfg.host, function () {
    var host = cfg.host || '*';
    var port = cfg.port || 'default';
    log.info('Listening - ' + host + ':' + port);
});
