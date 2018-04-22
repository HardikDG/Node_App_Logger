const Apps = require('./appsModel');

const logger = require('../../../helper/logger');

const appsController = {};

var fieldsExclusion = {
    __v: false,
    _id:false,
    createdAt:false,
    updatedAt:false
};

appsController.getAppsInfo = (req,res) => {
    const {appName,bundleId} = JSON.parse(req.body.payload);

    if(bundleId !== undefined){
        Apps.findOne({bundleId}).then((app) => {
            if(app){
                res.status(200).json({status:app.isEnable});
            }else {
                app = new Apps({ 
                    appName,
                    bundleId,
                    isEnable:true
                })
                app.save();
                res.status(200).json({message:"App is created",status:true});
            }
        })
    } else {
        res.status(400).json({message:"No app information found in request",status:false});
    }
}

appsController.getAppsList = (req,res) => {

    Apps.find({}, fieldsExclusion, function(err, apps) {
        if (err) {
            res.status(500).json({ success: false, message: 'Some error occured in retrival of apps list' });
            logger.error("get apps list error:  " + err);
        } else {
            res.status(200).json(apps);
        }
    });
}

appsController.setAppStatus = (req,res) => {

    const {isEnable,bundleId} = req.body;

    Apps.findOne({bundleId}).then((app) => {
        if(app) {
            app.isEnable = isEnable;
            app.save().then((response) => {
                res.status(200).json({ message: 'App status updated successfully' });
            }).catch((error)=> {
                res.status(500).json({ success: false, message: 'Something went wrong in updating the app status' });
            })
        } else {
            res.status(400).json({message:"No app found with given id"});
        }
    })

}

module.exports = appsController;