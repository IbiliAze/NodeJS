const express = require('express');
const Config = require('../models/config');
const router = new express.Router();


// POST /config
router.post('/config', async (request, response) => {
    const config = new Config(request.body);
    try {
        await config.save();
        response.status(201).send(config);
        console.log(`Created Config successfully, ID: ${config._id}`);
    } catch(error) {
        response.status(400).send({
            error: error
        });
        console.error(error);
    };
});

// GET /config
router.get('/config', async (request, response) => {
    try {
        const configs = await Config.find({});
        response.status(200).send(configs);
        console.log("Succesfully fetched Configs");
    } catch (error) {
        response.status(500).send({
            error: 'Internal Server Issue'
        });
        console.error(error);
    };
});

// GET /config by ID
router.get('/config/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const config = await Config.findById(_id);

        if (!config) {
            console.error(`ERR: Config with ID: ${_id} not found`);
            return response.status(404).send({
                error: `Config with ID: ${_id} not found`
            });
        };

        response.status(200).send(config);
        console.log(`Succesfully fetched a Config with ID: ${_id}`);
    } catch (error) {
        response.status(500).send({
            error: 'Internal Server Issue'
        });
        console.error(error);
    };
});

// PUT /config by ID
router.put('/config/:id', async (request, response) => {
    const _id = request.params.id;
    const update = request.body;
    const updateKeys = Object.keys(update);
    const allowedUpdates = ['isInUse', 'orgName', 'brand', 'model', 'siteName'];
    const isValidOperation = updateKeys.every((key) => allowedUpdates.includes(key));
    if (!isValidOperation) {
        console.error(`Update operation failed for Config with ID: ${_id}`);
        return response.status(400).send({
            error: "Invalid update"
        });
    };

    try {
        const user = await Config.findByIdAndUpdate(_id, update, { new: true, runValidators: true }); //new=get the new user after the update, runValidators=404 check
        if (!user) {
            console.error(`ERR: Config with ID: ${_id} not found`);
            return response.status(404).send({
                error: `Config with ID: ${_id} not found`
            });   
        }
        response.status(200).send(user);
        console.log(`Succesfully updated a Config with ID: ${_id}`);
    } catch (error) {
        response.status(400).send({
            error: error
        });
        console.error(error);
    };
});

// DELETE /config by ID
router.delete('/config/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const config = await Config.findByIdAndDelete(_id, { runValidators: true });
        if (!config) {
            console.error(`ERR: Config with ID: ${_id} not found`);
            return response.status(404).send({
                error: `Config with ID: ${_id} not found`
            });  
        };
        response.status(200).send({
            message: `Deleted Config successfully, ID: ${_id}`
        });
        console.log(`Succesfully deleted a Config with ID: ${_id}`);
    } catch (error) {
        response.status(500).send({
            error: error
        });
        console.error(error);
    };    
});



module.exports = router;
