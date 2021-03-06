const express = require('express');
const cors = require('cors');

const router = new express.Router();

const Site = require('../models/site');

const doesSiteExist = require('../middleware/doesSiteExist');
const authenticateToken = require('../middleware/authenticateToken');
const siteQuerystring = require('../middleware/siteQuerystring');


// // Routes
// // POST /api/site
// router.post('/site', authenticateToken, async (request, response) => {
//     const site = new Site({
//         ...request.body,
//         orgId: request.org._id
//     });
//     try {
//         await site.save();
//         console.log(`Site saved succesfully, ID: ${site._id}`);
//         response.status(201).send({
//             message: `Site saved succesfully`,
//             ID: site._id
//         });
//     } catch(error) {
//         console.error(error);
//         response.status(400).send({
//             error: error
//         });
//     };
// });


// // GET /api/site
// router.get('/site', cors(), authenticateToken, siteQuerystring, async (request, response) => {
//     try {
//         const sites = await Site.find({ orgId: request.org._id });
//         console.log(`Sites fetched successfully`);
//         // response.append( 'Access-Control-Allow-Headers' , "Access-Control-Allow-Headers, Authorization" )
//         // response.set('Content-Type', 'application/xml')
//         response.status(200).send(sites);
//     } catch (error) {
//         console.error(error);
//         response.status(404).send({
//             error: error
//         });
//     };
// });


// // GET /api/site by ID
// router.get('/site/:id', authenticateToken, doesSiteExist, async (request, response) => {
//     try {
//         const site = request.site;
//         await site.populate('orgId').execPopulate();
//         console.log(`Site fetched successfully, ID: ${site._id}`);
//         response.status(200).send(site);
//     } catch (error) {
//         console.error(error);
//         response.status(500).send({
//             error: error
//         });
//     };
// });


// // PUT /api/site by ID
// router.put('/site/:id', authenticateToken, doesSiteExist, async (request, response) => {
//     const updates = Object.keys(request.body);
//     const allowedUpdates = ['siteName'];
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
//     if (!isValidOperation) {
//         console.error(`Invalid update`);
//         return response.status(400).send({error: `Invalid update`});
//     };
//     try {
//         const site = request.site;
//         updates.forEach((update) => site[update] = request.body[update] );
//         await site.save();
//         console.log(`Site updated successfully, ID: ${request.params.id}`);
//         response.status(200).send({message: `Site updated successfully`, ID: request.params.id});
//     } catch (error) {
//         console.error(error);
//         response.status(500).send({
//             error: error
//         });
//     };
// });


// // DELETE /api/site by ID
// router.delete('/site/:id', authenticateToken, doesSiteExist, async (request, response) => {
//     try {
//         const site = request.site;
//         await site.remove();
//         console.log(`Site deleted successfully, ID: ${request.params.id}`);
//         response.status(200).send({message: `Site deleted successfully`, ID: request.params.id});
//     } catch (error) {
//         console.error(error);
//         response.status(500).send({
//             error: error
//         });
//     };
// });




router.post('/site', cors(), async (request, response) => {
    const site = new Site({
        ...request.body,
        orgId: '5fe22195c2b163276c1c1325'
    });
    try {
        await site.save();
        console.log(`Site saved succesfully, ID: ${site._id}`);
        response.status(201).send(site);
    } catch(error) {
        console.error(error);
        response.status(400).send({
            error: error
        });
    };
});


// GET /api/site
router.get('/site', cors(),async (request, response) => {
    try {
        const sites = await Site.find({ orgId: '5fe22195c2b163276c1c1325' });
        console.log(`Sites fetched successfully`);
        // response.append( 'Access-Control-Allow-Headers' , "Access-Control-Allow-Headers, Authorization" )
        // response.set('Content-Type', 'application/xml')
        response.status(200).send(sites);
    } catch (error) {
        console.error(error);
        response.status(404).send({
            error: error
        });
    };
});


// GET /api/site by ID
router.get('/site/:id', cors(),async (request, response) => {
    try {
        const site = await Site.findById(request.params.id);
        await site.populate('orgId').execPopulate();
        console.log(`Site fetched successfully, ID: ${site._id}`);
        response.status(200).send(site);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});


// PUT /api/site by ID
router.put('/site/:id', cors(), async (request, response) => {
    const updates = Object.keys(request.body);
    const allowedUpdates = ['siteName', 'type', 'description', 'department'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        console.error(`Invalid update`);
        return response.status(400).send({error: `Invalid update`});
    };
    try {
        const site = await Site.findById(request.params.id);
        updates.forEach((update) => site[update] = request.body[update] );
        await site.save();
        console.log(`Site updated successfully, ID: ${request.params.id}`);
        response.status(200).send(site);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});


// DELETE /api/site by ID
router.delete('/site/:id', cors(), async (request, response) => {
    try {
        const site = await Site.findById( request.params.id );
        console.log(site)
        await site.remove();
        console.log(`Site deleted successfully, ID: ${request.params.id}`);
        response.status(200).send(site);
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
});




module.exports = router;