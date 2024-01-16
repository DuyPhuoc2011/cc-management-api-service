const express = require('express');
const router = express.Router();
const utils = require('../db/utils');

router.post('/', (req, res) => {
    utils.insertProject(req.body.name, req.body.startDate, req.body.endDate, req.body.client, req.body.assignee).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.send(error);
    });
});

router.get('/', (req, res) => {
    utils.fetchProjectList().then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.send(error);
    });
});

module.exports = router;
