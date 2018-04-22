const logger = require('../../../helper/logger');
const Log = require('./logModel');

const logCtrl = {}

logCtrl.createLogEntry = (req, res) => {
    // logger.info(req.body);

    const {entries,deviceInfoId} = req.body;
    
    entries.forEach((entry, index) => {
        const {
            thread,
            fileName,
            level,
            message,
            logFunction,
            timestamp,
            line,
            bundleId
        } = entry

        logEntry = Log({
            fileName,
            logFunction,
            line,
            message,
            thread,
            level,
            timestamp,
            bundleId,
            deviceInfoId
        })

        logEntry
            .save()
            .then(() => {
                if (index === entries.length - 1) {
                    return res
                        .status(200)
                        .send({message: "received successfully"});
                }
            })
            .catch((err) => {
                logger.error(err);
                return res
                    .status(500)
                    .send({message: "Internal server error"});
            });
    });
}

logCtrl.getAppLogsCount = (req,res) => {
    Log.aggregate([
        {
            $group: {
                _id: '$bundleId', 
                count: {$sum: 1}
            }
        }
    ], function (err, result) {
        if (err) {
            logger.info(err)
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = logCtrl;