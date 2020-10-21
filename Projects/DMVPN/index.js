const express = require('express');
const morgan = require('morgan')
const server = new express();
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound');;
const errorHandler = require('./middleware/errorHander');
const config = require('./routers/config.router');
const bodyParser = require('body-parser');
const port = 5000;


// Body Parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


// Logger Middleware
// server.use(logger);
server.use(morgan('dev'))


// /Config Route
server.use('/api/config', config);


// 404 Not Found error
server.use(notFound);


// 500 Error handler
server.use(errorHandler)


// Listener
server.listen(5000, () => {
    console.log(`Listening on port ${port}`)
});