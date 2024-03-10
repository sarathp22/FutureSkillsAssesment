var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var productInventorySchema = new schema({
    quantity:{
        type:Int,
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

productInventorySchema.plugin(passportLocalMongoose);
var ProductInventories = mongoose.model('Inventory',productInventorySchema);
module.exports = ProductInventories;