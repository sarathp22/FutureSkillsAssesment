var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var productSchema = new schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    SKU:{
        type:String,
        required:true
    },
    fkProductCategoryId:{
        type:String,
        required:true
    },
    fkProductInventoryId:{
        type:String,
        required:true
    },
    price:{
        type:Int,
        required:true
    },
    fkDiscountId:{
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

productSchema.plugin(passportLocalMongoose);
var Products = mongoose.model('discount',productSchema);
module.exports = Products;
;