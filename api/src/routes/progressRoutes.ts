import { Router } from "express";
import { addProgress, getProgress } from "../controllers/progress";

export const progressRoutes = Router();

progressRoutes.get('/', getProgress);
progressRoutes.post('/', addProgress);