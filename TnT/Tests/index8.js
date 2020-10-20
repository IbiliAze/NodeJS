const express = require('express');
const server = new express();
const port = 8080;

const logger = require('./logger.js');
// server.use('/', logger);

server.get('/', logger, (req,res) => {
    res.send('it works');
});

server.get('/some', (req,res) => {
    res.send('it works');
});

server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});