const mongoose = require('mongoose');
const Stock = require('./stockModel.js');

const favoriteStockSchema = new mongoose.Schema({
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
    }
});
  
const FavoriteStock = mongoose.model('FavoriteStock', favoriteStockSchema);

module.exports = FavoriteStock;