import { Router } from "express";
import { addCard } from "../controllers/cards";

export const cardRoutes = Router();

cardRoutes.post("/", addCard);

