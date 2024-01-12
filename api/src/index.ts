import express from 'express';
import dotenv from 'dotenv';
import { cardRoutes } from './routes/cardRoutes';
import { setRoutes } from './routes/setRoutes';
import { userRoutes } from './routes/userRoutes';

dotenv.config();

const app = express();
const { PORT } = process.env || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json({ limit: '50mb' }));
app.use('/cards', cardRoutes);
app.use('/sets', setRoutes);
app.use('/users', userRoutes);




// app.post('/init', async (_, res) => {
//   const seedSets = sets;
//   const seedCardsProgramming = cardsProgramming;
//   const seedCardsCapitals = cardsCapitals;

//   await client.db.sets.create(seedSets);
//   await client.db.cards.create(seedCardsCapitals);
//   await client.db.cards.create(seedCardsProgramming);

//   return res.json({ success: true });
// });

