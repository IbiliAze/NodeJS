const express = require('express');
const server = new express();
const port = 5000;
const logger = require('./logger.js');

// GET Home Page 
server.get('/', logger, (req,res) => {
    res.send('Afenia Home Page');
});







server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});