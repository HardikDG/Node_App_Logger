const mongoose = require('mongoose');

const { Schema } = mongoose;

const logSchema = new Schema({
    fileName:String,
    logFunction: String,
    line: Number,
    message: String,
    level: String,
    thread: String,
    timeStamp: String,
    deviceInfoId:String,
    bundleId:String
}, {
    timestamps: true
});

const Log = mongoose.model('log', logSchema);
module.exports = Log; 
