import { Request, Response } from 'express';
import { client } from '../index';

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    await client.db.users.create({
      name,
      email,
      password,
    });
    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await client.db.users.read(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await client.db.users.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
