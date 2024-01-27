const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    SC_CODE: {
        type:Number
    },
    SC_NAME: {
        type:String
    },
    SC_GROUP: {
        type:String
    },
    SC_TYPE: {
        type:String
    },
    OPEN: {
        type:Number
    },
    HIGH: {
        type:Number
    },
    LOW: {
        type:Number
    },
    CLOSE: {
        type:Number
    },
    LAST: {
        type:Number
    },
    PREVCLOSE: {
        type:Number
    },
    NO_TRADES: {
        type:Number
    },
    NO_OF_SHRS: {
        type:Number
    },
    NET_TURNOV: {
        type:Number
    },
    Date:{
        type:String
    }
})


const Stock = mongoose.model('stocks', stockSchema);
module.exports = Stock;