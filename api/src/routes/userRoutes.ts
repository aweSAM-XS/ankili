import { Router } from 'express';
import { addUser, getAllUsers, getUser } from '../controllers/users';

export const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', addUser);
