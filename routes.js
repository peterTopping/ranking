const express = require('express');

const players = require('./controllers/players');
const scores = require('./controllers/scores');

const router = express.Router();

router.get('/api/players', players.get);
router.post('/api/players', players.post);

router.post('/api/scores', scores.post);

module.exports = router;
