var CronJob = require('cron').CronJob;
const fetchProperties = require('./tasks/fetch-pa-api');
// Fetch edmonton properties
var job = new CronJob('* * * * *', fetchProperties, null, true, 'America/Los_Angeles');
job.start();