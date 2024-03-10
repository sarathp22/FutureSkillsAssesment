var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var discountSchema = new schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    descPercent:{
        type:Int,
        required:true
    },
    active:{
        type:Boolean,
        default:true,
        required:true
    },
    createdAt:{
        type:String,
        required:false
    },
    modifiedAt:{
        type:String,
        required:false
    },
    deletedAt:{
        type:String,
        required:false
    }
})

discountSchema.plugin(passportLocalMongoose);
var Discounts = mongoose.model('discount',discountSchema);
module.exports = Discounts;
;