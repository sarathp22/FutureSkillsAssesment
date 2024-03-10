var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var productCategorySchema = new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
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

productCategorySchema.plugin(passportLocalMongoose);
var ProductCategories = mongoose.model('ProductCategory',productCategorySchema);
module.exports = ProductCategories;