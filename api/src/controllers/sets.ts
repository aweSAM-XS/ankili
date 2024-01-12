import { Request, Response } from 'express';
import { client } from '../index';

export const createSet = async (req: Request, res: Response) => {
  try {
    const { title, description, image, private: isPrivate } = req.body;
    await client.db.sets.create({
      title,
      description,
      image,
      private: isPrivate,
      cards: 10,
    });
    return res.json({ message: 'Set created successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getSets = async (req: Request, res: Response) => {
  try {
    const sets = await client.db.sets
      .select(['id', 'title', 'description', 'image', 'cards'])
      // .filter({ private: false })
      .getAll();
    return res.status(200).json({ sets });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getSet = async (req: Request, res: Response) => {
  try {
    const set = await client.db.sets.read(req.params.id);
    return res.status(200).json({ set });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateSet = async (req: Request, res: Response) => {
  try {
    const { title, description, image, private: isPrivate } = req.body;
    await client.db.sets.update(req.params.id, {
      title,
      description,
      image,
      private: isPrivate,
    });
    return res.json({ message: 'Set updated successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteSet = async (req: Request, res: Response) => {
  try {
    await client.db.sets.delete(req.params.id);
    return res.json({ message: 'Set deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createUserSet = async (req: Request, res: Response) => {
  try {
    const { user, set } = req.body;
    await client.db.user_sets.create({
      user,
      set,
    });
    return res.json({ message: 'UserSet created successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getUserSets = async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    console.log(user);
    const userSets = await client.db.user_sets
      .select(['id', 'set.*'])
      .filter({ user: `${user}` })
      .getAll();
    return res.status(200).json({ userSets });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteUserSet = async (req: Request, res: Response) => {
  try {
    await client.db.user_sets.delete(req.params.id);
    return res.json({ message: 'UserSet deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
