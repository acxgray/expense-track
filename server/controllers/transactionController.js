const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transactionModel');


const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find();

  res.status(200).json(transactions)
});

const setTransaction = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  const category = req.body.category;

  if(!name && !amount && !type) {
    res.status(400).json({ meesage: "Please specify the empty fields" })
  }

  const transaction = await Transaction.create({
    name: name,
    amount: amount,
    category: category
  })

  res.status(201).json(transaction)
});

// PUT
const updateTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if(!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedTransaction);
});

// DELETE
const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if(!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  await Transaction.deleteOne({
    _id: req.params.id
  });

  res.status(200).json({ id: req.params.id })

})

module.exports = {
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction
}