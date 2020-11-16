const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://data.edmonton.ca/resource/q7d6-ambg.json';
module.exports = async function fetchProperty() {
    const res = await fetch(baseURL);
    const properties = await res.json();
    console.log(`Got ${properties.length} properties`);

    // Filter Algorithm

    // Redis
    const success = await setAsync('edmontonpa', JSON.stringify(properties));
    console.log({ success });
};
module.exports();