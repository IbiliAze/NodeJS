const express = require('express');
const server = new express();
const port = 8080;

server.use((req, res, next) => {
    const {url, method} = req;
    const time = new Date();
    const message = `${method}: ${url} - ${time}`;
    console.log(message);
    next();
});

server.get('/', (req,res) => {
    res.send('it works');
});

server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});