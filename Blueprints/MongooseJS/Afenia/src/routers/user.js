const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');



// POST /user
router.post('/user', async (request, response) => {
    const user = new User(request.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        response.status(201).send({ token: token });
        console.log(`Created User successfully, ID: ${user._id}`);
    } catch (error) {
        response.status(400).send({
            error: "Sign-in error"
        });
        console.error(error);
    };
});

// POST /user/login 
router.post('/user/login', async (request, response) => {
    try {
        const user = await User.findByCredentials(request.body.email, request.body.password);
        const token = await user.generateAuthToken();
        response.status(200).send({token: token });
        console.log(`User logged in succesfully, ID: ${user._id}`);
    } catch (error) {
        response.status(403).send({
            error: error
        });
        console.error(error);
    };
});

// GET /user
router.get('/user/self', auth, async (request, response) => {
    response.send(request.user);
});

// GET /user by ID
router.get('/user/:id', auth, async (request, response) => {
    _id = request.params.id;
    try {
        const user = await User.findById(_id);

        if (!user) {
            console.error(`ERR: User with ID: ${_id} not found`);
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
        console.error(error);
    };
})

// PUT /user by ID
router.put('/user/:id', auth, async (request, response) => {
    const _id = request.params.id;
    const update = request.body;
    const updateKeys = Object.keys(update);
    const allowedUpdates = ['fullName', 'siteName', 'orgName', 'password'];
    const isValidOperation = updateKeys.every((key) =>  allowedUpdates.includes(key));
    if (!isValidOperation) {
        console.error(`Update operation failed for User with ID: ${_id}`);
        return response.status(400).send({
            error: "Invalid update"
        });
    };

    try {
        // const user = await User.findByIdAndUpdate(_id, update, { new: true, runValidators: true }); 
        const user = await User.findById(_id);
        updateKeys.forEach((key) => user[key] = request.body[key]);
        await user.save();

        if (!user) {
            console.error(`ERR: User with ID: ${_id} not found`);
            return response.status(404).send({
                error: `User with ID: ${_id} not found`
            });
        };
        response.status(200).send(user);
        console.log(`Succesfully updated a User with ID: ${_id}`);
    } catch (error) {
        response.status(400).send({
            error: error
        });
        console.error(error);
    };
});

// DELETE /config by ID
router.delete('/user/:id', auth, async (request, response) => {
    const _id = request.params.id;
    try {
        const user = await User.findByIdAndDelete(_id, { runValidators: true });
        if (!user) {
            console.error(`ERR: User with ID: ${_id} not found`);
            return response.status(404).send({
                error: `User with ID: ${_id} not found`
            });  
        };
        response.status(200).send({
            message: `Deleted User successfully, ID: ${_id}`
        });
        console.log(`Succesfully deleted a User with ID: ${_id}`);
    } catch (error) {
        response.status(500).send({
            error: error
        });
        console.error(error);
    };    
});




module.exports = router;