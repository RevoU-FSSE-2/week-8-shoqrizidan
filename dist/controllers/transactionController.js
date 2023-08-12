"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransactionById = exports.getTransactions = void 0;
let transactions = [];
const getTransactions = (req, res) => {
    res.json(transactions);
};
exports.getTransactions = getTransactions;
const getTransactionById = (req, res) => {
    const { id } = req.params;
    const transaction = transactions.find((t) => t.id === id);
    if (!transaction) {
        res.status(404).json({ error: 'Transaction not found' });
        return;
    }
    res.json(transaction);
};
exports.getTransactionById = getTransactionById;
const createTransaction = (req, res) => {
    const { description, amount, date } = req.body;
    const newTransaction = {
        id: String(transactions.length + 1),
        description,
        amount,
        date,
    };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
};
exports.createTransaction = createTransaction;
const updateTransaction = (req, res) => {
    const { id } = req.params;
    const { description, amount, date } = req.body;
    const transactionIdx = transactions.findIndex((t) => t.id === id);
    if (transactionIdx === -1) {
        res.status(404).json({ error: 'Transaction not found' });
        return;
    }
    transactions[transactionIdx] = Object.assign(Object.assign({}, transactions[transactionIdx]), { description,
        amount,
        date });
    res.json(transactions[transactionIdx]);
};
exports.updateTransaction = updateTransaction;
const deleteTransaction = (req, res) => {
    const { id } = req.params;
    const transactionIdx = transactions.findIndex((t) => t.id === id);
    if (transactionIdx === -1) {
        res.status(404).json({ error: 'Transaction not found' });
        return;
    }
    const deletedTransaction = transactions.splice(transactionIdx, 1)[0];
    res.json(deletedTransaction);
};
exports.deleteTransaction = deleteTransaction;
