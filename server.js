const express = require('express');
const mongoose = require('mongoose');
const Stock = require('./models/stockModel.js');
const FavoriteStock = require('./models/favouriteStockModel.js');
const app = express();


app.use(express.json());

// checking the server is running
app.get('/', function (req, res) {
  res.send('Hello Tushar')
});


// get all the stocksData of 25 days as per the requirement we can change it
app.get('/stocks', async(req, res) => {
    try {
        const stocks = await Stock.find({Date: { $lte: '25-01-2024' }, Date: { $gte: '01-01-2024' } });
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
});


// get stockByName 
// localhost:3000/stockByName/AEGIS LOGIS 
app.get('/stockByName/:SC_NAME', async(req, res) => {
    let obj = req.params;
    console.log(obj);
    try {
        const stocks = await Stock.find(obj);
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
});


// get stock History
// localhost:3000/stockHistory/AEGIS LOGIS 
app.get('/stockHistory/:SC_NAME', async(req, res) => {
    let obj = req.params;
    try {
        const stocks = await Stock.find(obj).select('Date HIGH LOW');
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
});


// add favouritestocks
app.get('/addFavouriteStock/:SC_NAME', async(req, res) => {
    let obj = req.params;
    try {
        const stock = await Stock.findOne(obj);
        let newObj = {
            SC_CODE:stock.SC_CODE,
            SC_NAME:stock.SC_NAME,
            SC_GROUP:stock.SC_GROUP,
            SC_TYPE:stock.SC_TYPE
        }
        FavoriteStock.create(newObj)
        .then(createdFavoriteStock => {
          res.status(200).json(createdFavoriteStock);
        })
        .catch(error => {
          res.status(500).json({messgae: error.message});
        });
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
});


// get all favourite stocks
app.get('/favouritestocks', async(req, res) => {
    try {
        const stocks = await FavoriteStock.find();
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
});


mongoose.connect('mongodb+srv://tk281141:8506938133@cluster0.j8pkvht.mongodb.net/StockDB?retryWrites=true&w=majority')
  .then(() => { 
    console.log('Database Connected!') ;
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });
})
  .catch((error) => { console.log(error) } );
