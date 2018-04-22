const express = require('express');
const appsController = require('./appsController');

const appsRouter = express.Router();

appsRouter.post('/get-app-status',appsController.getAppsInfo);
appsRouter.get('/get-all-apps',appsController.getAppsList);
appsRouter.post('/set-app-status',appsController.setAppStatus);

module.exports = appsRouter;