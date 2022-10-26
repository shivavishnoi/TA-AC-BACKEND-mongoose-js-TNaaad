var express = require('express');
var mongoose = require('mongoose');
//schema import
var User = require('./models/users');
// DB connect
mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : `DB Connected`);
  }
);
var app = express();
//data parse
app.use(express.json());
//routing middleware
app.post('/users', (req, res, next) => {
  User.create(req.body, (err, userData) => {
    if (err) return next(err);
    res.send(userData);
  });
});
app.get('/allUsers', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.send({ users });
  });
});
app.get('/users/:id', (req, res, next) => {
  var id = req.params.id;
  // User.find({ _id: id }, (err, user) => {
  //   next(err);
  //   res.json({ user });
  // });
  // User.findOne({ _id: id }, (err, user) => {
  //   next(err);
  //   res.json(user);
  // });
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});
app.put('/users/:id', (req, res, next) => {
  var id = req.params.id;
  // User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
  //  if (err) return next(err);
  //   res.json(user);
  // });
  User.updateOne({ _id: id }, req.body, { new: true }, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});
app.delete('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send(`user deleted`);
  });
});
//error handle
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(5000, 'localhost', () => {
  console.log('server started');
});
