const express = require('express');
const logCtrl = require('./logController');
const deviceCtrl = require('../device/deviceController')

const logRouter = express.Router();

logRouter.post('/send-log',deviceCtrl.addDeviceInfo,logCtrl.createLogEntry);
logRouter.get('/get-apps-logs-count',logCtrl.getAppLogsCount);

module.exports = logRouter;