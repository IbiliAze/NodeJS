require('./db/mongoose');

const morgan = require('morgan');
const express = require('express');

const app = express();

const orgRouter = require('./routers/org');
// const configRouter = require('./routers/config');

const port = process.env.PORT || 5000;




// Middlewares
app.use(express.json());
app.use(morgan('dev'));



// Routers
app.use('/api', orgRouter);
// app.use(configRouter);



// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



