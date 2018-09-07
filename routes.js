const express = require('express');

const users = require('./controllers/users');
const results = require('./controllers/results');

const router = express.Router();

router.get('/users', users.get);
router.post('/user', users.post);

router.post('/result', results.post);

module.exports = router;
