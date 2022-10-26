var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, lowercase: true, trim: true },
    sports: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', usersSchema);
