var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : `connection completed`);
  }
);

var app = express();
app.listen(3000, () => {
  console.log(`started 3k`);
});
