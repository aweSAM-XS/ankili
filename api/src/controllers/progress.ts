import { client } from './../index';
import { Request, Response } from 'express';

export const addProgress = async (req: Request, res: Response) => {
  try {
    const { user, set, cardsTotal, correct, wrong } = req.body;
    const obj = {
      user,
      set,
      cards_total: +cardsTotal,
      cards_correct: +correct,
      cards_wrong: +wrong,
      score: (+correct / +cardsTotal) * 100,
    };
    await client.db.progress.create(obj);
    return res.json({ message: 'progress added successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProgress = async (req: Request, res: Response) => {
  try {
    const { user } = req.query;
    const progress = await client.db.progress
      .select(['*', 'set.*'])
      .filter({ user: `${user}` })
      .getAll();
    return res.status(200).json(progress);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
