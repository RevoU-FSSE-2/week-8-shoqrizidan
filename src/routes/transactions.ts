import express from 'express';
const router = express.Router();

// Data transaksi sementara (gantikan dengan database)
let transactions: Transaction[] = [];

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

// Definisikan rute-rute di sini (GET, POST, PUT, PATCH, DELETE)

  router.get('/', (req, res) => {
    res.json(transactions);
  });

  router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  });
  
  router.post('/', (req, res) => {
    const newTransaction: Transaction = req.body;
    newTransaction.id = transactions.length + 1;
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTransaction: Transaction = req.body;
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions[index] = { ...transactions[index], ...updatedTransaction };
      res.json(transactions[index]);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  });

  router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFields = req.body;
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions[index] = { ...transactions[index], ...updatedFields };
      res.json(transactions[index]);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      res.json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  });
  
export default router;
