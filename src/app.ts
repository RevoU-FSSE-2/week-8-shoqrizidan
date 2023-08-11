import express from 'express';
import bodyParser from 'body-parser';
import transactionsRouter from './routes/transactions';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/transactions', transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
