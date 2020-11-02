const { response, request } = require('express');
const express = require('express');
require('./db/mongoose');
const Config = require('./models/config');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 5000;



// Middlewares
app.use(express.json());



// Methods and Routes
// POST /config
app.post('/config', async (request, response) => {
    const config = new Config(request.body);
    try {
        await config.save();
        response.status(201).send(config);
        console.log(`Created config successfully, ID: ${config._id}`);
    } catch(error) {
        response.status(400).send({
            error: error
        });
        console.log(error);
    };
});

// GET /config
app.get('/config', async (request, response) => {
    try {
        const configs = await Config.find({});
        response.status(200).send(configs);
        console.log("Succesfully fetched configs");
    } catch (error) {
        response.status(500).send({
            error: 'Internal Server Issue'
        });
        console.log(error);
    };
});

// GET /config by ID
app.get('/config/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const config = await Config.findById(_id);

        if (!config) {
            console.log(`ERR: Config with ID: ${_id} not found`);
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
        console.log(error);
    };
});

// PUT /config by ID
app.put('/config/:id', async (request, response) => {
    const _id = request.params.id;
    const update = request.body;
    try {
        const user = await Config.findByIdAndUpdate(_id, update, { new: true, runValidators: true }); //new=get the new user after the update, runValidators=404 check
        if (!user) {
            console.log(`ERR: Config with ID: ${_id} not found`);
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
        console.log(error);
    };
});



// POST /user
app.post('/user', async (request, response) => {
    const user = new User(request.body);
    try {
        await user.save();
        response.status(201).send(user);
        console.log(`Created user successfully, ID: ${user._id}`);
    } catch (error) {
        response.status(400).send({
            error: error
        });
        console.log(error);
    };
});

// GET /user
app.get('/user', async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).send(users);
        console.log("Succesfully fetched users");
    } catch (error) {
        response.status(500).send({
            error: error
        });
        console.log(error);
    };
});

// GET /user by ID
app.get('/user/:id', async (request, response) => {
    _id = request.params.id;
    try {
        const user = await User.findById(_id);

        if (!user) {
            console.log(`ERR: User with ID: ${_id} not found`);
            return response.status(404).send({
                error: `User with ID: ${_id} not found`
            });
        };

        response.status(200).send(user);
        console.log(`Succesfully fetched a User with ID: ${_id}`);
    } catch (error) {
        response.status(500).send({
            error: error
        });
        console.log(error);
    };
})



// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});