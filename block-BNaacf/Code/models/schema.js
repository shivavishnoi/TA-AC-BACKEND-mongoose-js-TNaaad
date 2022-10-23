var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  favourites: [String],
  marks: [Number],
});

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId;
});

// 1. village -> String
// 2. city -> String
// 3. state -> String
// 4. pin -> number
// 5. user -> ObjectId of User
