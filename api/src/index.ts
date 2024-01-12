import express from 'express';
import dotenv from 'dotenv';
import { getXataClient } from './xata';
import { cardRoutes } from './routes/cardRoutes';
import { setRoutes } from './routes/setRoutes';
import { userRoutes } from './routes/userRoutes';
import { progressRoutes } from './routes/progressRoutes';

export const client = getXataClient();
dotenv.config();
const { PORT } = process.env || 3000;

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use('/cards', cardRoutes);
app.use('/sets', setRoutes);
app.use('/users', userRoutes);
app.use('/progress', progressRoutes);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
