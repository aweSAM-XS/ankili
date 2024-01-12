import { getXataClient } from '../xata';
import { Request, Response } from 'express';
const client = getXataClient();

export const addCard = async (req: Request, res: Response) => {
  const { question, answer, image, set } = req.body;
  await client.db.cards.create({
    question,
    answer,
    image,
    set,
  });
  return res.json({ success: true });
};