const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = mongoose.connect;

mongoose.connect(
    'mongodb+srv://zhubrisa:A6hqxAKiJ38Ha34b@blind75prompts.qcl2exy.mongodb.net/?retryWrites=true&w=majority',  
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }
)
.then(() => {
    console.log("connected");
})
.catch(err => {
    console.log(err);
})

// mongoose.connection.once('open', () => {
//     console.log('Connected to Database');
//   });

// add routes

app.get('/', (req, res) => {
    console.log('hello')
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  });


module.exports = db;
module.exports = app;