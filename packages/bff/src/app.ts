import express, { Request, Response } from 'express';
import cors from 'cors';
import foodCalculationRoutes from './routes/foodCalculationRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.status(200).send({ message: 'Server is up and running.' });
});

app.use('/api', foodCalculationRoutes);

const PORT: number = 4000;
app.listen(PORT, () => console.log(`Sever listens on port ${PORT}`));
