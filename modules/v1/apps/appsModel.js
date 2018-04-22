const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const appsSchema = new Schema({
    appName:String,
    bundleId:String,
    isEnable:Boolean
},{timestamps:true})

const Apps = mongoose.model('apps',appsSchema);
module.exports = Apps;