var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected');
  }
);

var app = express();
app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(5000);
