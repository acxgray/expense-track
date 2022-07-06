const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the Transaction Name"]
  },

  amount: {
    type: Number,
    required: [true, 'Please Enter the Transaction Amount']
  },

  category: {
    type: String,
    required: [true, 'Please Select the Transaction Category']
  }
}, {
  timestamp: true
});

module.exports = mongoose.model('Transaction', transactionSchema)
