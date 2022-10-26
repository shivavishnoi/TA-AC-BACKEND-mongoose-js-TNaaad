var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users');
var Article = require('./articles');
var commentSchema = new Schema(
  {
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: User },
    author: { type: Schema.Types.ObjectId, ref: Article },
    // article: { type: String },
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
