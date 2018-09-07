const express = require('express');

const users = require('./controllers/users');
const results = require('./controllers/results');

const router = express.Router();

router.get('/users', users.get);
router.post('/users', users.post);

router.post('/results', results.post);

module.exports = router;
