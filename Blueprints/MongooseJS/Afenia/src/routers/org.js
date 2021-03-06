const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = new express.Router();

const Org = require('../models/org');


// Routes
// POST /api/org
router.post('/org', async (request, response) => {
    const org = new Org(request.body);
    try {
        const token = await org.generateAuthToken();
        console.log(`Organization saved succesfully, ID: ${org._id}`);
        response.status(201).send({
            message: `Organization saved succesfully`,
            id: org._id,
            token: token
        });
    } catch (error) {
        console.error(error);
        response.status(400).send({
            error
        });
    };
});


// POST /api/org/token
router.post('/org/token', async (request, response) => {
    try {
        const org = await Org.findByCredentials(request.body['email'], request.body['password']);
        const token = await org.generateAuthToken();
        console.log(`Organization login succesfull, ID: ${org._id}`);
        response.status(200).send({
            message: `Organization login succesfull`,
            id: org._id,
            token: token
        });
    } catch(error) {
        console.error(error);
        response.status(400).send({
            error
        });
    };
});


// POST /api/org/logout
router.post('/org/logout', authenticateToken, async (request, response) => {
    try {
        request.org.tokens = request.org.tokens.filter((tokenObject) => {
            return tokenObject.token !== request.token;
        });
        await request.org.save();
        console.log(`Logout succesfull`);
        response.status(200).send({
            message: `Logout succesfull`
        });
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error
        });
    };
});


// POST /api/logout/all
router.post('/org/logout/all', authenticateToken, async (request, response) => {
    try {
        request.org.tokens = request.org.tokens.filter((tokenObject) => {
            return tokenObject.token == undefined;
        });
        await request.org.save();
        console.log(`Logout from all sessions succesfull`);
        response.status(200).send({
            message: `Logout from all sessions succesfull`
        });
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error
        });
    };
});


// GET /api/org
router.get('/org', authenticateToken, async (request, response) => {
    response.send(request.org);
});


// DELETE /api/org
router.delete('/org', authenticateToken, async (request, response) => {
    try {
        const orgId = request.org._id;
        await request.org.remove();
        console.log(`Organization deleted succesfully, ID: ${orgId}`);
        response.status(200).send({
            message: `Organization deleted succesfully`,
            ID: orgId
        });
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error
        });
    };
});


module.exports = router;