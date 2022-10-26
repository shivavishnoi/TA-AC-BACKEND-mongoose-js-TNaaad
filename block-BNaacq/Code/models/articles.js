var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users');

var articleSchema = new Schema(
  {
    title: { type: String, minlength: 10, required: true },
    description: { type: String },
    tags: { type: [String] },
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: User },
    comments: { type: [String] },
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
