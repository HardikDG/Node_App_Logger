const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const deviceSchema = new Schema({
    appBuild:String,
    firstAppBuild:String,
    appName:String,
    bundleId: String,
    userName:String, 
    uuid:String,
    appVersion:String,
    lastStart:String,
    osVersion:String,
    os:String,
    deviceName: String,
    firstStart: String,
    firstAppVersion:String ,
    starts: Number,
    hostName:String ,
    deviceModel:String
}, {timestamps:true});

const Device = mongoose.model('device',deviceSchema);
module.exports = Device;
