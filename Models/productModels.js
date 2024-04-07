const mongoose =  require('mongoose');

const Schema =  mongoose.Schema;

const productSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    Quantity: {
        type: Number,
        required: true
    },
    BuyingPrice: {
        type:Number,
        required:true
    },
    MRP: {
        type:Number,
        required:true 
    },
    Category: {
        type: String,
        required: true
    }
},{timestamp:true})

module.exports = mongoose.model('Product',productSchema)