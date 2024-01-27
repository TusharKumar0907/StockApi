const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.get('/', function (req, res) {
  res.send('Hello Tushar')
})


mongoose.connect('mongodb+srv://tk281141:8506938133@cluster0.j8pkvht.mongodb.net/ASSINGMENT2?retryWrites=true&w=majority')
  .then(() => { 
    console.log('Database Connected!') ;
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    });
})
  .catch((error) => { console.log(error) } );
