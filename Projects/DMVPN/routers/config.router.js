const express = require('express');
const router = express.Router();
const fs = require('fs');
const Playbook = require('../models/playbook');
const playbookJsonToYaml = require('../middleware/jsonToYaml');


// POST /config 
router.post('/', (req, res) => {
    const body = req.body;
    const playbook_json = Playbook(body);
    const playbook = playbookJsonToYaml(playbook_json);
    fs.writeFile('pb.yaml', playbook, (err) => {
            console.log(err);
    });
    res.status(201).json({
        message: "Config accepted"
    });
});



module.exports = router;
