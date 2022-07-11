const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please enter the Full Name']
  },
  email: {
    type: String,
    required: [true, 'Please enter the Email Address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide the password']
  }
},{
  timestamp: true
});

module.exports = mongoose.model('User', userSchema);