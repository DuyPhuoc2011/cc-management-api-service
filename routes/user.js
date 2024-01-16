
const express = require('express');
const router = express.Router();
const utils = require('../db/utils');

router.get('/', (req, res) => {
    utils.fetchUserList(req.body.name, req.body.start_date, req.body.end_date, req.body.client, req.body.assignee).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.send(error);
    });
});

module.exports = router;
