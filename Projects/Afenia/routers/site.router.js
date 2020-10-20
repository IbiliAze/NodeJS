const { response } = require('express');
const express = require('express');
const router = express.Router();
const Site = require('../models/site.model.js');
const db = require('../data/db.js');



// GET /sites -> get all sites
router.get('/', (req, res) => {
    const sites = db.get('sites').value();
    res.status(200)
        .json({
        sites: sites
    });
});


// GET /sites/:id -> get site by ID
router.get('/:id', (req, res) => {
    const site = db.get('sites')
                    .filter(site => site.id === req.params.id)
                    .value();
    res.status(200).json({
        sites: site
    });
});


// POST /sites -> create a new site
router.post('/', (req, res) => {
    // console.log(req.body)
    const {name, floor} = req.body;
    const site = new Site(name, floor);
    db.get('sites')
       .push(site)
       .write();
    res.status(201).json({
        message: `Created site ${name}`
    });
});


// PUT /sites/:id -> update site by ID
router.put('/:id', (req, res) => {
    const {name, floor} = req.body;
    const updateOptions = {};
    if(name){
        updateOptions.name = name;
    }
    if(floor){
        updateOptions.floor = floor;
    }
    console.log(updateOptions);
    db.get('sites')
        .find({id: req.params.id})
        .assign(updateOptions)
        .write();
    res.status(200).json({
        message: "Updated"
    });
});


// DELETE /sites/:id -> delete a site by ID
router.delete('/:id', (req, res) => {
    db.get('sites')
        .remove({id: req.params.id})
        .write();
    res.status(200).json({
        message: "Deleted"
    });
});




module.exports = router;