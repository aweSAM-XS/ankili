import { Router } from "express";
import { addCard, getSetCards } from "../controllers/cards";

export const cardRoutes = Router();

cardRoutes.post("/", addCard);
cardRoutes.get("/", getSetCards);
