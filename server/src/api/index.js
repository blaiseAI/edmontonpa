const express = require('express');

const emojis = require('./emojis');
const properties = require('./properties');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        emojis: 'http://seblaise.me/api/v1/emojis',
        properties: 'http://seblaise.me/api/v1/properties',
    });
});

router.use('/emojis', emojis);
router.use('/properties', properties);

module.exports = router;