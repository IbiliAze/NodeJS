const express = require('express');
const cors = require('cors');

const router = new express.Router();

const Node = require('../models/node');

const doesSiteExist = require('../middleware/doesSiteExist');
const authenticateToken = require('../middleware/authenticateToken');
const siteQuerystring = require('../middleware/siteQuerystring');





router.post('/node', cors(), async (request, response) => {
    const node = new Node({
        ...request.body,
        orgId: '5fe22195c2b163276c1c1325'
    });
    try {
        await node.save();
        console.log(`Node saved succesfully, ID: ${node._id}`);
        response.status(201).send(node);
    } catch(error) {
        console.error(error);
        response.status(400).send({
            error: error
        });
    };
});


// GET /api/node
router.get('/node', cors(),async (request, response) => {
    try {
        const node = await Node.find({ orgId: '5fe22195c2b163276c1c1325' });
        console.log(`Nodes fetched successfully`);
        // response.append( 'Access-Control-Allow-Headers' , "Access-Control-Allow-Headers, Authorization" )
        // response.set('Content-Type', 'application/xml')
        response.status(200).send(node);
    } catch (error) {
        console.error(error);
        response.status(404).send({
            error: error
        });
    };
});


// GET /api/node by ID
router.get('/node/:id', cors(),async (request, response) => {
    try {
        const node = await Node.findById(request.params.id);
        await node.populate('orgId').execPopulate();
        console.log(`Node fetched successfully, ID: ${node._id}`);
        response.status(200).send(node);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});


// PUT /api/node by ID
router.put('/node/:id', cors(), async (request, response) => {
    const updates = Object.keys(request.body);
    const allowedUpdates = ['nodeGroups', 'layer', 'description', 'platform'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        console.error(`Invalid update`);
        return response.status(400).send({error: `Invalid update`});
    };
    try {
        const node = await Node.findById(request.params.id);
        updates.forEach((update) => node[update] = request.body[update] );
        await node.save();
        console.log(`Node updated successfully, ID: ${request.params.id}`);
        response.status(200).send(node);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});


// DELETE /api/node by ID
router.delete('/node/:id', cors(), async (request, response) => {
    try {
        const node = await Node.findById( request.params.id );
        console.log(node)
        await node.remove();
        console.log(`Node deleted successfully, ID: ${request.params.id}`);
        response.status(200).send(node);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});




module.exports = router;