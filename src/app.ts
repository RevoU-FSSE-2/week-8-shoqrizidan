import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import transactionRoutes from './routes/transactionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(transactionRoutes);

app.get("/", (req: any, res: any) => {
    res.send("Hello, this is Shoqri Zidan Assignment for Week 8");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
