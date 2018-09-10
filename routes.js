const express = require('express');

const users = require('./controllers/users');
const results = require('./controllers/results');

const router = express.Router();

router.get('/api/users', users.get);
router.post('/api/users', users.post);

router.post('/api/results', results.post);

module.exports = router;
