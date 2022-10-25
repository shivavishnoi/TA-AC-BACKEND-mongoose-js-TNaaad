var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: { type: String },
  date: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;

// title -> String
// description -> String
// tags -> String
// createdAt -> Date, defaults to current date
// likes -> Number, defaults to zero
