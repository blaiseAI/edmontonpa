const express = require('express');

const emojis = require('./emojis');
const properties = require('./properties');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        emojis: '/emojis',
        properties: '/properties',
    });
});

router.use('/emojis', emojis);
router.use('/properties', properties);

module.exports = router;