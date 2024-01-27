const express = require('express');
const mongoose = require('mongoose');
const Stock = require('./models/stockModel.js');
const app = express();



// chec
app.get('/', function (req, res) {
  res.send('Hello Tushar')
});

app.get('/stocks', async(req, res) => {
    try {
        const stocks = await Stock.find();
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
