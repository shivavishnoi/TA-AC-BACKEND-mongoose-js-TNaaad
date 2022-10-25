var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  Pages: { type: Number, min: 1, max: 5 },
});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
