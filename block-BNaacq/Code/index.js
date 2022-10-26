var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/users');
var Article = require('./models/articles');
var Comment = require('./models/comments');
mongoose.connect(
  'mongodb://localhost:27017/blog',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    console.log(err ? err : `DB Connected`);
  }
);

var app = express();
app.use(express.json());
app.post('/createUser', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) next(err);
    res.send(`${user.name} created with ${user._id}`);
  });
});
app.post('/postArticle', (req, res, next) => {
  console.log(req.body);
  Article.create(req.body, (err, article) => {
    if (err) next(err);
    res.send(article);
  });
});
app.post('/postComment', (req, res, next) => {
  Comment.create(req.body, (err, comment) => {
    if (err) next(err);
    res.send(comment);
  });
});
app.use((err, req, res, next) => {
  if (err) {
    res.send(err);
  }
});
app.listen(5000, 'localhost', () => {
  console.log(`server at 5k`);
});
