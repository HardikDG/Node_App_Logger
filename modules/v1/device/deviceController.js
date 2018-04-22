const Device = require('./deviceModel');

const logger = require('../../../helper/logger');

const deviceCtrl = {};

deviceCtrl.addDeviceInfo = (req, res, next) => {

    console.log(req.body);

    let request = JSON.parse(req.body.payload);
    const {device, entries} = request;

    if (entries instanceof Array) {
        let {
            appBuild,
            firstAppBuild,
            appName,
            bundleId,
            userName,
            uuid,
            appVersion,
            lastStart,
            osVersion,
            os,
            deviceName,
            firstStart,
            firstAppVersion,
            starts,
            hostName,
            deviceModel
        } = device;

       deviceInfo = new Device({
            appBuild,
            firstAppBuild,
            appName,
            bundleId,
            userName,
            uuid,
            appVersion,
            lastStart,
            osVersion,
            os,
            deviceName,
            firstStart,
            firstAppVersion,
            starts,
            hostName,
            deviceModel
        })

        deviceInfo
            .save()
            .then((response) => {
                logger.info(response._id);
                req.body.deviceInfoId = response._id;
                req.body.entries = entries;
                next();
            })
            .catch(() => {})

    } else {
        return res
            .status(400)
            .send({message: "Bad request"});
    }

}

module.exports = deviceCtrl;