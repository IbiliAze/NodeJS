const express = require('express');
const server = new express();
const port = 5000;
const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const siteRouter = require('./routers/site.router');
const bodyParser = require('body-parser');


// Body Parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


// Logger
server.use(logger);


// Router
server.use('/api/sites', siteRouter);


// 404 Error
server.use(notFound);


// 500 Error
server.use(errorHandler);


// Server
server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});