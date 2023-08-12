import { Request, Response } from 'express';
import { Transaction } from '../models/Transaction';

let transactions: Transaction[] = [
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

export const getTransactions = (req: Request, res: Response) => {
  if (transactions.length === 0) {
    return res.status(404).json({ message: 'No transactions found.' });
  }
  res.json(transactions);
};

export const getTransactionById = (req: Request, res: Response) => {
  const { id } = req.params;
  const transaction = transactions.find((t) => t.id === id);
  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found.' });
  }
  res.json(transaction);
};

export const createTransaction = (req: Request, res: Response) => {
  const { description, amount, date, type, category, detail } = req.body;
  const newTransaction: Transaction = {
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

export const updateTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, date, type, category, detail } = req.body;
  const transactionIdx = transactions.findIndex((t) => t.id === id);
  if (transactionIdx === -1) {
    return res.status(404).json({ message: 'Transaction not found.' });
  }
  transactions[transactionIdx] = {
    ...transactions[transactionIdx],
    description,
    amount,
    date,
    type,
    category,
    detail,
  };
  res.json(transactions[transactionIdx]);
};

export const partialUpdateTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, date, type, category, detail } = req.body;
  const transactionIdx = transactions.findIndex((t) => t.id === id);
  if (transactionIdx === -1) {
    return res.status(404).json({ message: 'Transaction not found.' });
  }
  const updatedTransaction = {
    ...transactions[transactionIdx],
    description: description || transactions[transactionIdx].description,
    amount: amount || transactions[transactionIdx].amount,
    date: date || transactions[transactionIdx].date,
    type: type || transactions[transactionIdx].type,
    category: category || transactions[transactionIdx].category,
    detail: detail || transactions[transactionIdx].detail,
  };
  transactions[transactionIdx] = updatedTransaction;
  res.json(updatedTransaction);
};

export const deleteTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const transactionIdx = transactions.findIndex((t) => t.id === id);
  if (transactionIdx === -1) {
    return res.status(404).json({ message: 'Transaction not found.' });
  }
  const deletedTransaction = transactions.splice(transactionIdx, 1);
  res.json(deletedTransaction[0]);
};
