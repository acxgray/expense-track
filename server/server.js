const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use(errorHandler);

// Connect DB
const connectDB = require('./db/config');
connectDB();

app.listen(port, () => console.log(`Server started on Port ${port}`));


