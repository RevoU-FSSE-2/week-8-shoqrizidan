"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.partialUpdateTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransactionById = exports.getTransactions = void 0;
let transactions = [
    {
        id: '1',
        description: 'Cash Out',
        amount: 100.00,
        date: '2023-08-12',
        type: 'expense',
        category: 'Shop',
        detail: 'Tshirt',
    },
    {
        id: '2',
        description: 'Cash in',
        amount: 500.00,
        date: '2023-08-13',
        type: 'income',
        category: 'Salary',
        detail: 'Office Salary',
    },
];
const getTransactions = (req, res) => {
    if (transactions.length === 0) {
        return res.status(404).json({ message: 'No transactions found.' });
    }
    res.json(transactions);
};
exports.getTransactions = getTransactions;
const getTransactionById = (req, res) => {
    const { id } = req.params;
    const transaction = transactions.find((t) => t.id === id);
    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }
    res.json(transaction);
};
exports.getTransactionById = getTransactionById;
const createTransaction = (req, res) => {
    const { description, amount, date, type, category, detail } = req.body;
    const newTransaction = {
        id: String(transactions.length + 1),
        description,
        amount,
        date,
        type,
        category,
        detail,
    };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
};
exports.createTransaction = createTransaction;
const updateTransaction = (req, res) => {
    const { id } = req.params;
    const { description, amount, date, type, category, detail } = req.body;
    const transactionIdx = transactions.findIndex((t) => t.id === id);
    if (transactionIdx === -1) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }
    transactions[transactionIdx] = Object.assign(Object.assign({}, transactions[transactionIdx]), { description,
        amount,
        date,
        type,
        category,
        detail });
    res.json(transactions[transactionIdx]);
};
exports.updateTransaction = updateTransaction;
const partialUpdateTransaction = (req, res) => {
    const { id } = req.params;
    const { description, amount, date, type, category, detail } = req.body;
    const transactionIdx = transactions.findIndex((t) => t.id === id);
    if (transactionIdx === -1) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }
    const updatedTransaction = Object.assign(Object.assign({}, transactions[transactionIdx]), { description: description || transactions[transactionIdx].description, amount: amount || transactions[transactionIdx].amount, date: date || transactions[transactionIdx].date, type: type || transactions[transactionIdx].type, category: category || transactions[transactionIdx].category, detail: detail || transactions[transactionIdx].detail });
    transactions[transactionIdx] = updatedTransaction;
    res.json(updatedTransaction);
};
exports.partialUpdateTransaction = partialUpdateTransaction;
const deleteTransaction = (req, res) => {
    const { id } = req.params;
    const transactionIdx = transactions.findIndex((t) => t.id === id);
    if (transactionIdx === -1) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }
    const deletedTransaction = transactions.splice(transactionIdx, 1);
    res.json(deletedTransaction[0]);
};
exports.deleteTransaction = deleteTransaction;
