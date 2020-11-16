const { json } = require('express');
const express = require('express');
const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

const router = express.Router();

router.get('/', async(req, res) => {
    // All the properties from redis
    const properties = await getAsync('edmontonpa');
    // Convert back to JSON from redis
    res.json(JSON.parse(properties));
    //console.log(properties);
});

module.exports = router;