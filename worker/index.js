var CronJob = require('cron').CronJob;
const fetchProperties = require('./tasks/fetch-pa-api');
// Fetch edmonton properties every at 08:00
var job = new CronJob('0 8 * * *', fetchProperties, null, true, 'America/Los_Angeles');
job.start();