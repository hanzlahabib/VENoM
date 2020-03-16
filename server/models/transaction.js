const mongoose = require('mongoose');
const Schema = mongoose.Schema

let transactionsSchema = new Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    transactionDate: { type: Date, required: true },
    transactionType: { type: Date, required: true },
    description: { type: String, required: true },
    charge: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
    notes: { type: String, default: '' },
    createdOn: { type: Date, default: Date.now },
})

const Transaction = mongoose.model('Transactions', transactionsSchema)

module.exports = Transaction