// const mongoose = require('mongoose');
// const newSchema =new mongoose.Schema({
//     shorturl:{
//     type:String,
//     required:true,
//     unique:true},
//     actualurl:{
//         type:String,
//         required:true}
// },{timestamps:true});

// const urlMod = mongoose.model('urlmod',newSchema);
// modules.export={urlMod};


const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    shorturl:{
        type:String,
        required:true,
        unique:true},
    actualurl:{
        type:String,
        required:true}
},{timestamps:true});
const urlMod = mongoose.model('urlmod',newSchema);
module.exports = {urlMod};