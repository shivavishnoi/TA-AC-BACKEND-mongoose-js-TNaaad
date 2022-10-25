var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var addressSchema = new Schema({
  village: { type: String },
  city: { type: String, minlength: 4, trim: true, lowercase: true },
  state: { type: String },
  pin: { type: Number },
  user: { type: Schema.Types.ObjectId },
});
module.exports = mongoose.model('Address', addressSchema);

// village -> String
// city -> String
// state -> String
// pin -> number
// user -> ObjectId of User from user schema
// Q. Update address schema to contain required validators for state and city field.
