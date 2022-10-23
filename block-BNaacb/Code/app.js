var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(
  `mongodb://localhost/sample`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    console.log(err ? err : `Connected DB`);
  }
);

var app = express();

app.get('/', (req, res) => {
  res.send(`Index Page`);
});
app.listen(3000, () => {
  console.log(`connected`);
});
