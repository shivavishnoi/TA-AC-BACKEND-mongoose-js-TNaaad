var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  age: { type: Number, min: 18, max: 50 },
});

var User = mongoose.model('User', userSchema);
module.exports = User;
