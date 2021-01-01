require('./db/mongoose');

const express = require('express');
const morgan = require('morgan');

const orgRouter = require('./routers/org');
const siteRouer = require('./routers/site');
const configRouter = require('./routers/config');
const nodeRouter = require('./routers/node');
const notFound = require('./middleware/notFound');

const app = express();

const port = process.env.PORT || 5000;




/////////////

const path = require('path');
app.use(express.static(path.join(__dirname, '../public')))

/////////////




// Middlewares
app.use(express.json());
app.use(morgan('dev'));


// Routers
app.use('/api', orgRouter);
app.use('/api', siteRouer);
app.use('/api', configRouter);
app.use('/api', nodeRouter);


// Error Handlers
app.use(notFound);


// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



