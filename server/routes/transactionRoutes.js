const express = require('express');
const router = express.Router();
const { getTransactions, setTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController');

// Routes

router.route('/').get(getTransactions).post(setTransaction);
router.route('/:id').put(updateTransaction).delete(deleteTransaction);

module.exports = router;
