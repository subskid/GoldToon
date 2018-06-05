'use strict'; 

const express = require('express');
const config = require('./server/config/config');
const bodyParser = require('body-parser');
const app = express()
//const db = require('./server/config/db')
const path = require('path');
const logger = require('morgan');
const debug = require('debug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/')));
app.use(logger('dev'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve('client/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});
/** load routes*/

//require('./server/user/user.server.controller')(app);
/** load port*/

var ports = config.server.port;


/**#!/usr/bin/env node"/


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || ports);
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port);
app.on('error', onError);
app.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

module.exports = app;
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = app.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
