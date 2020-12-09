require('./db/mongoose');

const express = require('express');
const morgan = require('morgan');
const swStats = require('swagger-stats');

const config = require('./routers/config');
const org = require('./routers/org');
const site = require('./routers/site');
const notFound = require('./middleware/notFound');

const app = new express();


// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(swStats.getMiddleware());


// Routes
app.use('/api', org);
app.use('/api', site);
app.use('/api', config);


// Error Handlers
app.use(notFound);


module.exports = app;