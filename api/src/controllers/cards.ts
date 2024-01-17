import { Request, Response } from 'express';
import { client } from '../index';

export const addCard = async (req: Request, res: Response) => {
  try {
    const { question, answer, image, set } = req.body;
    const card = await client.db.cards.create({
      question,
      answer,
      image,
      set,
    });

    if (card) {
      await client.db.sets.update(set, {
        cards: { $increment: 1 },
      });
    }
    return res.json({ message: 'card added successfully' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getSetCards = async (req: Request, res: Response) => {
  try {
    const cards = await client.db.cards
      .select(['id', 'question', 'answer', 'image', 'set'])
      .filter({ set: req.query.setid })
      .getAll();
    return res.status(200).json(cards);
  } catch (error) {
    return res.status(500).json(error);
  }
};
