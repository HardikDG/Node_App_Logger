const express = require('express');
const deviceController = require('./deviceController');

const deviceRouter = express.Router();

deviceRouter.post('/add-device-info',deviceController.addDeviceInfo);

module.exports = deviceRouter;