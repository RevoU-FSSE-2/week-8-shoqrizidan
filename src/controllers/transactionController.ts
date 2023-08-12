import { Request, Response } from 'express';
import { Transaction } from '../models/Transaction';

let transactions: Transaction[] = [];

export const getTransactions = (req: Request, res: Response) => {
  res.json(transactions);
};

export const getTransactionById = (req: Request, res: Response) => {
  const { id } = req.params;
  const transaction = transactions.find((t) => t.id === id);
  if (!transaction) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }
  res.json(transaction);
};

export const createTransaction = (req: Request, res: Response) => {
  const { description, amount, date } = req.body;
  const newTransaction: Transaction = {
    id: String(transactions.length + 1),
    description,
    amount,
    date,
  };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};

export const updateTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;
  const transactionIdx = transactions.findIndex((t) => t.id === id);
  if (transactionIdx === -1) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }
  transactions[transactionIdx] = {
    ...transactions[transactionIdx],
    description,
    amount,
    date,
  };
  res.json(transactions[transactionIdx]);
};

export const deleteTransaction = (req: Request, res: Response) => {
  const { id } = req.params;
  const transactionIdx = transactions.findIndex((t) => t.id === id);
  if (transactionIdx === -1) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }
  const deletedTransaction = transactions.splice(transactionIdx, 1)[0];
  res.json(deletedTransaction);
};
